import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatTabsModule
  ]
})
export class MaterialModule{}
