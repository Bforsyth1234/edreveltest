import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonHeader, IonContent, IonTitle, IonToolbar, IonSplitPane, IonMenu } from "@ionic/angular/standalone";
import { CourseService } from '../../services/course.service';
import { CourseData } from '../../models/course-info';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
  standalone: true,
  imports: [IonSplitPane, IonToolbar, IonTitle, IonContent, IonHeader, IonCol, IonRow, IonGrid, IonButton, IonList, IonItem, IonLabel, CommonModule, IonMenu],
  providers: [CourseService],
})
export class CourseInfoComponent implements OnInit, OnDestroy {
  public courseData: CourseData | undefined;
  private destroy$ = new Subject<boolean>();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourseData();
  }
  // Get course data
  private getCourseData() {
    this.courseService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.courseData = data;
      });
  }

  // Unsubscribe from observables
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
