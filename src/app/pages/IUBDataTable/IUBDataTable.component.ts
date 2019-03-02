/**
 * Import Angular libraries.
 */
import { Component, OnInit } from '@angular/core';

/**
 * Import custom services.
 */
import { ApiService } from '../../services/api.service';

/**
 * Import third-party libraries.
 */
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'IUBDataTable.component.html'
})
export class IUBDataTableComponent implements OnInit {
  /**
   * Creates IUB Data Table Component object instance.
   * @param apiService - API service object instance.
   */
  constructor(
    private apiService: ApiService,
    public toastr: ToastrService
  ) { }

  /**
   * Does all required pre-requisites before loading the component.
   */
  ngOnInit() {
    this.retrieveProcurement();
  }

  /**
   * Retrieves IUB procurement list.
   */
  retrieveProcurement() {
    this.apiService.getProcurements()
      .subscribe(
        data => {
          console.log(data);
        },
        () => {
          this.toastr.error('Cannot retrieve IUB procurement data', 'IUB procurement data not retrieved');
        }
      );
  }
}
