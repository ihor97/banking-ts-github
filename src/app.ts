import { interval, take, skip, forkJoin, takeUntil, of, Observable, catchError, concat, timer, merge, map, concatMap, switchMap, share, publish } from "rxjs";



// фішка як працювати з ActivatedRoute через pipe

// class AppComponent{
//     user:User
//     constructor(private route:ActivatedRoute,private userSrv:UserService){
//         this.route.params.pipe(
//             map(v=>v.id),
//             switchMap(id=>this.userSrv.fetvhById(id))
//         ).subscribe(user=>this.user=user)
//     }

// }