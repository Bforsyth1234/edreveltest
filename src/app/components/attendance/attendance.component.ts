import { Component, OnDestroy, OnInit } from '@angular/core';
import { LineGraphComponent } from '../line-graph/line-graph.component';
import { CourseService } from '../../services/course.service';
import { Subject, takeUntil } from 'rxjs';
import { CourseData } from '../../models/course-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  standalone: true,
  imports: [CommonModule, LineGraphComponent],
})
export class AttendanceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  public chartData: number[] = [];
  public labels: string[] = [];
  public chartTitle = 'Attendance';
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getAttendanceData();
  }

  private getAttendanceData(): void {
    this.courseService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: CourseData) => {
        this.chartData = data.attendanceInfo.data;
        this.labels = data.attendanceInfo.dates;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
