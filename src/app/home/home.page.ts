import { Component, OnInit } from '@angular/core';
import { IonMenuButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList, IonLabel, IonItem, IonMenu, IonSplitPane, IonButton } from '@ionic/angular/standalone';
import { LineGraphComponent } from '../components/line-graph/line-graph.component';
import { CourseInfoComponent } from '../components/course-info/course-info.component';
import { AttendanceComponent } from '../components/attendance/attendance.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonButtons, IonButton, IonSplitPane, IonMenu, IonItem, IonLabel, IonList, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, AttendanceComponent, LineGraphComponent, CourseInfoComponent],
})
export class HomePage implements OnInit {
  forceSplitPaneHidden = true;
  constructor() {
  }

  ngOnInit() {
    // Hide split pane on small screens
    this.forceSplitPaneHidden = window.innerWidth < 768;
  }

  shouldHideSplitPane(): boolean {
    return this.forceSplitPaneHidden;
  }

  hideShowSplitPane() {
    // Toggle split pane visibility
    this.forceSplitPaneHidden = !this.forceSplitPaneHidden;
  }
}
