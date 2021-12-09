import { visitValue } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

/**
 * @title Button-toggles with forms
 */
@Component({
  selector: 'button-toggle-forms-example',
  templateUrl: 'button-toggle-forms-example.html',
})
export class ButtonToggleFormsExample {
  EnterLimitBy: 'Vehicle' | 'Axle' = 'Vehicle';
  OverAndUnderLimit: 'Same' | 'Different' = 'Same';
  SetLimitUsing: 'Percent' | 'PressureUnit' = 'Percent';

  VehicleAxles = [
    {
      Axle: 1,
      Pressure: '',
      Limit: '',
      OverWarning: '',
      OverCritical: '',
      UnderWarning: '',
      UnderCritical: '',
    },
    {
      Axle: 2,
      Pressure: '',
      Limit: '',
      OverWarning: '',
      OverCritical: '',
      UnderWarning: '',
      UnderCritical: '',
    },
    {
      Axle: 3,
      Pressure: '',
      Limit: '',
      OverWarning: '',
      OverCritical: '',
      UnderWarning: '',
      UnderCritical: '',
    },
    {
      Axle: 4,
      Pressure: '',
      Limit: '',
      OverWarning: '',
      OverCritical: '',
      UnderWarning: '',
      UnderCritical: '',
    },
  ];

  OverAndUnderDifferentHeader = [
    {
      Label: 'Axle',
      Icon: null,
      display: false,
    },
    {
      Label: 'Pressure',
      Icon: null,
      display: true,
    },
    {
      Label: 'Under Warning',
      Icon: 'fas fa-exclamation-triangle warning',
      display: true,
    },
    {
      Label: 'Under Critical',
      Icon: 'fas fa-exclamation-circle Critical',
      display: true,
    },
    {
      Label: 'Over Warning',
      Icon: 'fas fa-exclamation-triangle warning',
      display: true,
    },
    {
      Label: 'Over Critical',
      Icon: 'fas fa-exclamation-circle Critical',
      display: true,
    },
  ];

  OverAndUnderSameHeader = [
    {
      Label: 'Axle',
      Icon: null,
      display: false,
    },
    {
      Label: 'Pressure',
      Icon: null,
      display: true,
    },
    {
      Label: 'Warning',
      Icon: 'fas fa-exclamation-triangle warning',
      display: true,
    },
    {
      Label: 'Critical',
      Icon: 'fas fa-exclamation-circle Critical',
      display: true,
    },
  ];

  
  UnderOverSameTopHeader = [
    {
      Label: 'Over / Under Inflation',
      Icon: 'fas fa-arrows-alt-v',
      display: true,
    },
  ];

  UnderOverDifferentTopHeader = [
    {
      Label: 'Under Inflation',
      Icon: 'fas fa-arrow-down',
      display: true,
    },
    {
      Label: 'Over Inflation',
      Icon: 'fas fa-arrow-up',
      display: true,
    }
  ];

  topHeader = this.UnderOverSameTopHeader;
  suffix:string = '%'

  currentTableHeader = this.OverAndUnderSameHeader;
  get ObjectKey() {
    return Object.keys(this.VehicleAxles[0]);
  }

  get rowspan() {
    if (this.EnterLimitBy === 'Vehicle') {
      return this.VehicleAxles.length;
    }
    return 1;
  }

  renderLimit(i: number) {
    if (this.EnterLimitBy === 'Vehicle' && i > 0) {
      return false;
    }
    return true;
  }

  copyLimitToOtherAxle(value) {
    this.VehicleAxles = this.VehicleAxles.map((s) => {
      s.Limit = value;
      return s;
    });
  }

  changeHeader(event: MatButtonToggleChange) {
    if (event.value === 'Same') {
      this.currentTableHeader = this.OverAndUnderSameHeader;
      this.topHeader = this.UnderOverSameTopHeader;
    }
    if (event.value === 'Different') {
      this.currentTableHeader = this.OverAndUnderDifferentHeader;
      this.topHeader = this.UnderOverDifferentTopHeader;
    }
  }

  changeSuffix(event: MatButtonToggleChange) {
    if (event.value === 'Percent') {
     this.suffix = '%'
    }
    if (event.value === 'PressureUnit') {
      this.suffix = 'PSI'
    }
  }

  copyOverWarningToOtherAxle(value) {
    this.VehicleAxles = this.VehicleAxles.map((s) => {
      s.OverWarning = value;
      return s;
    });
  }
  copyOverCriticalToOtherAxle(value) {
    this.VehicleAxles = this.VehicleAxles.map((s) => {
      s.OverCritical = value;
      return s;
    });
  }

  copyUnderCriticaltToOtherAxle(value) {
    this.VehicleAxles = this.VehicleAxles.map((s) => {
      s.UnderCritical = value;
      if (this.OverAndUnderLimit === 'Same') {
        s.OverCritical = value;
      }
      return s;
    });
  }
  copyUnderWarningToOtherAxle(value) {
    this.VehicleAxles = this.VehicleAxles.map((s) => {
      s.UnderWarning = value;
      if (this.OverAndUnderLimit === 'Same') {
        s.OverWarning = value;
      }
      return s;
    });
  }
}

export interface Header {
  Label: string;
  Icon: string;
  display: boolean;
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
