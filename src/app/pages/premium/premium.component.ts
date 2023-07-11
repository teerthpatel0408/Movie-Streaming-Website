import { Component ,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  constructor(private service:MovieApiServiceService){

  }
  nowPlayingResult:any=[];
  popularMovieResult:any=[];
  topratedMovieResult:any=[];
  popularTvResult:any=[];


  ngOnInit(): void {
      this.nowPlayingData();
      this.popularData();
      this.topratedData();
      this.tvPopularData();
  }

  nowPlayingData()
{
  this.service.getNowPlaying().subscribe((result)=>{
    console.log(result,"nowPlaying#");
    this.nowPlayingResult=result.results;
  });

}

popularData(){
  this.service.getPopularMovie().subscribe((result)=>{
    console.log(result,"getPopular#");
    this.popularMovieResult=result.results;
  });
}

topratedData(){
  this.service.getTopRatedMovie().subscribe((result)=>{
    console.log(result,"gettoprated#");
    this.topratedMovieResult=result.results;
  });
}

tvPopularData(){
  this.service.getPopularTv().subscribe((result)=>{
    console.log(result,"getpopulartv#");
    this.popularTvResult=result.results;
  });
}
}
