import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
