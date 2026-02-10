import { Component, HostListener, OnInit } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmOptimusService } from '../../dao/crm-optimus.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IConfig } from 'ngx-countries-dropdown';
import { Lead } from '../../model/lead.model';
import { ModalWebinarComponent } from '../../modal-webinar/modal-webinar.component';

declare let $: any;
declare var google: any;

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})



export class WebinarComponent implements OnInit{

  selectedCountryConfig: IConfig = {
    hideCode: true,
    hideName: true
  };
  countryListConfig: IConfig = {
    hideCode: true,
    
  };
  
  allowedCountryCodes: string[] = ['co', 'py', 'ur', 'mx', 'es','cl', 'ar', 'ec', 'pe','uy'];
  submitted = false;
  public formGroup : FormGroup;
  public code: any = "+34";
  public pais: any = undefined;
  mobile: any;

  constructor(private readonly crm: CrmOptimusService, private readonly fb : FormBuilder, private modalService: MdbModalService) { 
    this.formGroup = this.fb.group({
      nombre:  ['', Validators.required],
      email:   ['', Validators.required],       
      empresa: ['', Validators.required],       
      telefono:['', Validators.required],      
      rol:     ['', Validators.required],       
    })
  }

  ngOnInit(): void {
    if (window.screen.width < 560) { // 768px portrait
      this.mobile = true;
    }
  }

  @HostListener('window:resize')
  onResize() {
    let currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 560) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = undefined;
    }
  }

  topScroll(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  salvarDatos(){
    this.submitted = true;

    if (this.formGroup.invalid) {
      console.log(this.formGroup.errors)
      return;
    }else{
      $('.preloader').fadeIn('slow');

      let lead:Lead = {
        nombre: this.formGroup.value.nombre,
        email:   this.formGroup.value.email,
        empresa: this.formGroup.value.empresa,    
        telefono:this.code +" "+ this.formGroup.value.telefono,      
        rol:     this.formGroup.value.rol,       
        idEstado: 1,
        observaciones: "CAMPAÑA DEL WEBINAR"

      }
      this.crm.crearLeadWebinar(lead).subscribe({  
        next: res => console.log('Respuesta de la solicutud: ', res),
        error: err => console.log('Error al enviar ', err),  
        complete: () => {
          $('.preloader').fadeOut('slow');
          console.log('Se cerro el evento de creacion')
          this.modalService.open(ModalWebinarComponent, {
            modalClass: 'modal-dialog-large',
            containerClass: "modal-overlay"
          })
          this.submitted = false
          this.formGroup.reset()
        }
      });
    }
  }

  onCountryChange(country:any){
    this.code = country.dialling_code;
  }
  
}
