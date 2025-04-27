import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {MechaService} from '../../services/mecha.service';

@Component({
  selector: 'app-create',
    imports: [
        FormsModule
    ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _mechaService: MechaService = inject(MechaService);
  createMechaForm: FormGroup;
  mechaName: string = '';

  constructor() {
    this.createMechaForm = this._fb.group({
      mechaName: [null, [Validators.required,Validators.maxLength(50)]],
      type: [null, [Validators.required,Validators.maxLength(50)]],
    })
  }

  selectChoice(value: string) {
    this.createMechaForm.get('choice')?.setValue(value);
  }

  onSubmit() {
    this.createMechaForm.markAllAsTouched();

    if(this.createMechaForm.invalid) {
      return;
    }

    if (this.createMechaForm.valid) {
      console.log('Form value:', this.createMechaForm.value);
    } else {
      console.log('Form invalid');
    }
  }
}
