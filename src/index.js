import { DiagramEditor } from '../../clooca-diagram-editor'
import request from 'superagent'

export class Clooca {
  constructor(el) {
    var diagramEditor = new DiagramEditor(el);
    var toolpallet = diagramEditor.createToolPallet();
    toolpallet.addItem('select', 'selectIcon')
    toolpallet.addItem('rect', 'rectIcon')
    diagramEditor.on('addNode', () => {
      this.save(diagramEditor.diagram)
    })
      
  }

  save(diagram) {
    request
      .post('/api/v1/save')
      .send({ diagram: diagram.toJson() })
      .end((err, res) => {
        // Calling the end function will send the request
      });
  }

}
