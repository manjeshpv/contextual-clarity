const ZohoCreator = require('./zohoCreator');
const models = require('./model');

const bookingCreator = new ZohoCreator({ space_name: 'booking', models });

async function renderDiagram() {
    const stages = await bookingCreator.getStages();
    const transitions = await bookingCreator.getTransitions(); // Assuming you have a method to get transitions

    // Convert stages and transitions to a format suitable for JointJS or GoJS

    // Example for JointJS:
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
        el: document.getElementById('paper'),
        model: graph,
        width: 800,
        height: 600,
        gridSize: 10,
        drawGrid: true
    });

    const stageElements = stages.map(stage => {
        const rect = new joint.shapes.standard.Rectangle();
        rect.position(stage.x, stage.y);
        rect.resize(100, 40);
        rect.attr({
            body: { fill: 'blue' },
            label: { text: stage.name, fill: 'white' }
        });
        return rect;
    });

    stageElements.forEach(element => element.addTo(graph));

    transitions.forEach(transition => {
        const link = new joint.shapes.standard.Link();
        link.source(stageElements[transition.fromStageIndex]);
        link.target(stageElements[transition.toStageIndex]);
        link.addTo(graph);
    });
}

renderDiagram();
