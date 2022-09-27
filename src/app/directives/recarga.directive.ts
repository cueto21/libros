import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRecarga]'
})
export class RecargaDirective implements OnChanges{

  @Input() appRecarga !: number;

  constructor( private templateref : TemplateRef<any>,
               private viewContainerRef : ViewContainerRef ) 
{
  this.viewContainerRef.createEmbeddedView( templateref);
}

ngOnChanges(changes: SimpleChanges): void {
  
  if(changes['appRecarga'])
  {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateref);
  }
}
}
