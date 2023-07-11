import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  showMore:boolean;
  constructor(private service:MovieApiServiceService,private router:ActivatedRoute){
    this.showMore=false;
  }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  getSimilarResult:any;
  
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
    this.getSimilar(getParamId);
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetail#');
      this.getMovieDetailResult=result;
    });
  }

  getSimilar(id:any){
    this.service.getSimilarMovieDetails(id).subscribe((result)=>{
      console.log(result,'getsimilarmovie#');
      this.getSimilarResult=result.results;
    });
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo');
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key;
        }
      });
      
    });
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'getMovieCast');
      this.getMovieCastResult=result.cast;
    });
  }
}
