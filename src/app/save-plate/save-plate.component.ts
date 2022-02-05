import { Component,OnDestroy, OnInit ,ViewChild ,AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
    import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-save-plate',
  templateUrl: './save-plate.component.html',
  styleUrls: ['./save-plate.component.css']
})
export class SavePlateComponent implements  OnDestroy, OnInit {
    // @ViewChild(DataTableDirective, {static: false})
    // datatableElement : DataTableDirective = new DataTableDirective <any> ();

    dtTrigger: Subject <any> = new Subject <any> ();
    dtOptions: DataTables.Settings = {};


    @ViewChild('closebutton') closebutton: any;
    SaveAPlateForm: FormGroup | any;
    submitted = false;
    isModalOpen = false;
    plateList: any;
    Items: any;
    ItemsObj: any = {};
    restaurantId: any = "RES900033";
    menuId: any = "M00004";
    base_url = window.localStorage.getItem('base_url');
    auth_token = window.localStorage.getItem('auth_token');
    numberOnly(event: any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.dtOptions = {pagingType: 'simple_numbers',pageLength: 5};
        this.getplatedata();
        this.getItemsList();
        this.SaveAPlateForm = this.formBuilder.group({
            itemName: ['', Validators.required],
            availableTimeFrom: ['', Validators.required],
            availableTimeTo: ['', Validators.required],
            totalCount: ['', Validators.required],
            newPrice: ['', Validators.required],
            oldPrice: ['', Validators.required],
        });
        console.log(this.SaveAPlateForm);
    }
    getplatedata() {
        let post = {restaurantId: this.restaurantId}
        this.http.post(`${this.base_url}listAllSaveAPlate`, post).subscribe((result: any) => {
            this.plateList = result.data;
            this.dtTrigger.next();
        })
    }
   

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
    getItemsList() {
        let post = {
            restaurantId: this.restaurantId
        }
        this.http.post(`${this.base_url}menuItemLists`, post).subscribe((result: any) => {
            this.Items = result.data;
            for (let i = 0; i < result.data.length; i++) {
                this.ItemsObj[this.Items[i].itemId] = this.Items[i]
            }
        })
    }
    get f() {
        return this.SaveAPlateForm.controls;
    }
    OpenModal() {
        this.isModalOpen = true;
    }
    onTimeChange(time: any) {
        var timeSplit = time.split(':'),
            hours, minutes, meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (hours > 12) {
            meridian = 'PM';
            hours -= 12;
        } else if (hours < 12) {
            meridian = 'AM';
            if (hours == 0) {
                hours = 12;
            }
        } else {
            meridian = 'PM';
        }
        return hours + ':' + minutes + ' ' + meridian;
    }
    SaveAPlate() {
        // console.log(this.f())
        this.submitted = true;
        if (this.SaveAPlateForm.invalid) {
            return;
        }
        let post = this.SaveAPlateForm.value;
        post.restaurantId = this.restaurantId;
        post.menuId = this.menuId;
        post.availableTimeFrom = this.onTimeChange(post.availableTimeFrom);
        post.availableTimeTo = this.onTimeChange(post.availableTimeTo);
        let itemDetails = this.ItemsObj[post.itemName];
        post.itemName = itemDetails.itemName;
        post.itemId = itemDetails.itemId;
        post.imageURL = itemDetails.image.length > 0 ? itemDetails.image : "https://gowhereapp.s3.amazonaws.com/menuImages/5-1643460599429.png";
        this.http.post(`${this.base_url}addNewSaveAPlate`, JSON.stringify(post)).subscribe((result: any) => {
            this.closebutton.nativeElement.click();
            this.isModalOpen = false;
            this.onReset();
            // this.ngOnInit();
            // this.dtTrigger.unsubscribe();
            //   // this.ngOnDestroy()
            // this.getplatedata();
            window.location.reload();
        })
    }
    onReset() {
        this.submitted = false;
        this.SaveAPlateForm.reset();
    }
}