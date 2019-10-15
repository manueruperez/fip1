import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'FI';

  items = ['juan', 'pedro', 'luis'];

  ngOnInit() {

  }

  addItem() {
    this.items.push('care culo');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
