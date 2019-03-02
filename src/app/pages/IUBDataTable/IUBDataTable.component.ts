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
   * Globally used variables within the component.
   */
  public IUBData: any[] = [];
  public limit = 10;
  public priceFrom: number;
  public priceTo: number;
  public tenderCountFrom: number;
  public tenderCountTo: number;
  public authorityName: string;

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
    const filters = {
      'part_5_list.part_5.contract_price_exact': this.priceFrom || this.priceTo ?
        { $gte: this.priceFrom, $lte: this.priceTo } : undefined,
      'part_5_list.part_5.tender_num': this.tenderCountFrom || this.tenderCountTo ?
        { $gte: this.tenderCountFrom, $lte: this.tenderCountTo } : undefined,
      authority_name: this.authorityName ? this.authorityName : undefined
    };

    this.apiService.getProcurements(this.limit, filters)
      .subscribe(
        data => {
          this.IUBData = <any>data;
        },
        () => {
          this.toastr.error('Cannot retrieve IUB procurement data', 'IUB procurement data not retrieved');
        }
      );
  }
}
