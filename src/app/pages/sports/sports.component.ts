import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  constructor(private service:MovieApiServiceService){

  }
  airingtodayResult:any=[];
  trendingTvResult:any=[];
  

  ngOnInit(): void {
    this.airingtodayData();
    this.trendingTvData();
    
  }

  airingtodayData(){
    this.service.getAiringToday().subscribe((result)=>{
      console.log(result,"getairingtoday#");
      this.airingtodayResult=result.results;
    });
  }

  trendingTvData(){
    this.service.getTrendingTv().subscribe((result)=>{
      console.log(result,"getTrendingTv#");
      this.trendingTvResult=result.results;
    });
  }




}
