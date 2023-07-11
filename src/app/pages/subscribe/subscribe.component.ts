import { Component ,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){

  }

  ngOnInit(): void {
    
}
}
