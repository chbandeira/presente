import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationService } from '../shared/pagination/pagination.service';
import { Pagination, PaginationResponse } from '../shared/pagination/pagination.model';
import { Observable, Observer } from 'rxjs';
import { Aluno } from './aluno/aluno.model';
import { environment } from '../../environments/environment';

const url = environment.api + '/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
    private http: HttpClient,
    private paginationService: PaginationService) { }

  search(aluno?: Aluno, pagination?: Pagination): Observable<PaginationResponse> {
    let httpParams = new HttpParams();
    if (pagination) {
      httpParams = this.paginationService.getHttpParamsToSearch(pagination);
    }
    if (aluno) {
      httpParams = this.setHttpParamsToSearch(aluno, httpParams);
    }
    return this.http.get<PaginationResponse>(url, {
      params: httpParams
    });
  }

  setHttpParamsToSearch(aluno: Aluno, httpParams: HttpParams): HttpParams {
    if (aluno.nome) {
      httpParams = httpParams.set('nome', aluno.nome);
    }
    if (aluno.anoLetivo) {
      httpParams = httpParams.set('anoLetivo', String(aluno.anoLetivo));
    }
    if (aluno.matricula) {
      httpParams = httpParams.set('matricula', aluno.matricula);
    }
    return httpParams;
  }

  save(aluno: Aluno, fileToUpload: File): Observable<Aluno> {
    if (!aluno.cpf || aluno.cpf.trim() === '') {
      aluno.cpf = null;
    }

    const formData: FormData = new FormData();
    formData.append('aluno', new Blob([JSON.stringify(aluno)], {
      type: 'application/json'
    }));
    formData.append('file', fileToUpload);
    if (fileToUpload != null) {
      aluno.urlFoto = fileToUpload.name;
    }

    if (aluno.id) {
      return this.http.put<Aluno>(url, formData);
    }
    return this.http.post<Aluno>(url, formData);
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(url + '/' + id);
  }

  delete(id: number) {
    return this.http.delete(url + '/' + id);
  }

  /**
   * https://stackblitz.com/edit/get-img-from-url-observable-angular
   */
  getBase64ImageFromURL(url: string): Observable<any> {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;  img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement): string {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/jpg");
    return dataURL.replace(/^data:image\/(jpg|png);base64,/, "");
  }
}
