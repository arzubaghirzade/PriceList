import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app/app.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  confirmModal?: NzModalRef;
  isVisible = false;
  priceList: any;
  arrayObj = {
    id: null,
    image: {
        image_key: [''],
        image_Url: ['']
    },
    content: [
        {
            fullName: [''],
            profession: [''],
            about: [''],
            language_iso: "az"
        },
        {
          fullName: [''],
          profession: [''],
          about: [''],
          language_iso: "en"
        },
        {
          fullName: [''],
          profession: [''],
          about: [''],
          language_iso: "ru"
        }
    ]
  };
  constructor( private appService: AppService,
    private router: Router,
    private modal: NzModalService) { }

  ngOnInit(): void {
    this.appService.getPriceList().subscribe(result => {
      this.priceList = result;
      console.log(this.priceList);
      
     });
  }
  valuesDetails(id:any) {
    localStorage.removeItem('id');
    localStorage.setItem('id', JSON.stringify(id));
    this.router.navigate(['price-list/edit', id]);
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

