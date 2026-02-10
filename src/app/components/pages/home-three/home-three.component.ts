import { Country } from '@angular-material-extensions/select-country';
import { Component, HostListener, OnInit } from '@angular/core';
import { CrmOptimusService } from '../../dao/crm-optimus.service';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lead } from '../../model/lead.model';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CommonModule} from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { ModalComponent } from '../../modal/modal.component';

declare let $: any;
declare var google: any;

@Component({
    selector: 'app-home-three',
    templateUrl: './home-three.component.html',
    styleUrls: ['./home-three.component.scss'],
    
})
export class HomeThreeComponent implements OnInit {

  
  allowedCountryCodes: string[] = ['co', 'py', 'ur', 'mx', 'es','cl', 'ar', 'ec', 'pe','uy'];
  submitted = false;
  public formGroup : FormGroup;
  public code: any = "+34";
  public pais: any = undefined;
  mobile: any;

  constructor(private readonly crm: CrmOptimusService, private readonly fb : FormBuilder, private modalService: MdbModalService) { 
    this.formGroup = this.fb.group({
      nombre:  ['', Validators.required],
      apellido:[''],
      email:   ['', Validators.required],       
      empresa: ['', Validators.required],       
      pais:    ['', Validators.required],       
      telefono:['', Validators.required],      
      rol:     ['', Validators.required],       
      observaciones: [''],         
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
        apellido:this.formGroup.value.apellido,
        email:   this.formGroup.value.email,
        empresa: this.formGroup.value.empresa,      
        pais:    this.formGroup.value.pais,     
        telefono:this.code +" "+ this.formGroup.value.telefono,      
        rol:     this.formGroup.value.rol,       
        observaciones:this.formGroup.value.observaciones,
        idEstado: 1
      }
      this.crm.crearLead(lead).subscribe({  
        next: res => console.log('Respuesta de la solicutud: ', res),
        error: err => console.log('Error al enviar ', err),  
        complete: () => {
          $('.preloader').fadeOut('slow');
          console.log('Se cerro el evento de creacion')
          this.modalService.open(ModalComponent, {
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
