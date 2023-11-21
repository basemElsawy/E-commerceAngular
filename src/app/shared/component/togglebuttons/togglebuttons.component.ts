import { Component, Input } from '@angular/core';
import { SharedService } from '../../service/shared.service';
@Component({
  selector: 'app-togglebuttons',
  templateUrl: './togglebuttons.component.html',
  styleUrls: ['./togglebuttons.component.css'],
})
export class TogglebuttonsComponent {
  @Input() typeClasses!: string;
  @Input() btnClasses!: string;
  @Input() badgeNumber: number = 0;

  constructor(public service: SharedService) {}

  ngOnInit() {}
}
