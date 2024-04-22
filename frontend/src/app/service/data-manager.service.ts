import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { ChartDto } from '../model/HistoricalQuoteDto';
import { SummaryStock } from '../model/SummaryStock';
import { SymbolDto } from '../model/SymbolDto';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

}
