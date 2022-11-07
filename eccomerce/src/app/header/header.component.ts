import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() selected:EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(item:string){
this.selected.emit(item)
  }
}
