import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  public intervalo: any;
  public results: any[] = [
    {
      "name": "CyberPunk 2077",
      "value": 21
    },
    {
      "name": "Shadow of the Tom Raider",
      "value": 25
    },
    {
      "name": "Far Cry 6",
      "value": 15
    },

    {
      "name": "Battlefield 2042",
      "value": 40
    }
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';
  colorScheme = 'nightLights';
  
  constructor() {
    this.intervalo = setInterval(() => {
      const newResults = [...this.results];
      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 100);
      }

      this.results = [...newResults];
    }, 2000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any): void {
  }


}
