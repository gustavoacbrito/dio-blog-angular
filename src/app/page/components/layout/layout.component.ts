import {Component,} from '@angular/core';
import {faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {

  faLinkedin = faLinkedin
  faGithub = faGithub
}
