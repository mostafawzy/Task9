import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NodeSrvieceService } from '../../services/node-srviece.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit{

  tvList:any[]=[];
  constructor(private tvServ:NodeSrvieceService){}
  ngOnInit() {
    this.tvServ.getItemList().subscribe((list)=>{
      this.tvList=list
      console.log(list);
      
    })
  }

}
