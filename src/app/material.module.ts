
import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import { MatSortModule } from '@angular/material/sort';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MatMenuModule } from '@angular/material/menu';
// import { MatTableModule } from '@angular/material/table';

const material = [
    // MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // MatSidenavModule,
    MatListModule,
    // MatSortModule,
    // MatTooltipModule,
    // MatSelectModule,
    // MatGridListModule,
    MatFormFieldModule,
    // MatCheckboxModule,
    MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatMenuModule,
    MatSnackBarModule,
    // MatTableModule,
    // MatDialogModule,
    MatCardModule
]

@NgModule({
    imports: [material],
    exports: [material]
})

export class MaterialModule {}
