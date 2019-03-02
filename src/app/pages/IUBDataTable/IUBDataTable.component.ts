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
  public sortBy: string;
  public sortDirection = 1;
  public authorityData: any;

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
    const sort = {};

    if (this.sortBy) {
      sort[this.sortBy] = this.sortDirection;
    }

    this.apiService.getProcurements(this.limit, filters, sort)
      .subscribe(
        data => {
          this.IUBData = <any>data;
        },
        () => this.toastr.error('Cannot retrieve IUB procurement data', 'IUB procurement data not retrieved')
      );
  }

  /**
   * Set a specific sorting for the IUB procurement list.
   * @param field - Field by which to sort.
   */
  setSorting(field: string) {
    if (this.sortBy !== field) {
      this.sortDirection = 1;
    } else {
      if (this.sortDirection === 1) {
        this.sortDirection = -1;
      } else {
        this.sortDirection = 1;
      }
    }

    this.sortBy = field;

    // Retrieve procurement
    this.retrieveProcurement();
  }

  /**
   * Retrieves data for a specific authority.
   * @param name - Name of the authority for which to retrieve data.
   * @param regNr - Registration number of the authority for which to retrieve data.
   */
  getAuthorityData(name: string, regNr: string) {
    this.apiService.getAuthorityData(name, regNr)
      .subscribe(
        data => {
          this.authorityData = <any>data;
        },
        () => this.toastr.error('Cannot retrieve authority data', 'Authority data was not retrieved')
      );
  }
}
