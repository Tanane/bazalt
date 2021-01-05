import Triangle from "./Triangle"
// const position = {x: 450, y: 400}
const position = { x: 0, y: 0 }
const edgeType = 'smoothstep';

const TriangleShapeCSS = {

  width: 0,
  height: 0,
  borderLeftWidth: 60,
  borderRightWidth: 60,
  borderBottomWidth: 120,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'lightBlue',
  padding: 0,
}

const data = [
  {
    id: '1',
    type: 'default',
    data: { label: <Triangle text="1 Fund" /> },
    style: TriangleShapeCSS,
    position,
  },
  {
    id: '2',
    type: 'input',
    data: { label: 'SPV' },
    style: { backgroundColor: 'DarkTurquoise', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'bottom',
    position,
  },
  {
    id: '3',
    type: 'input',
    data: { label: 'SPV' },
    style: { backgroundColor: 'DarkTurquoise', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'bottom',
    position,
  }, {
    id: '4',
    type: 'input',
    data: { label: 'SPV' },
    style: { backgroundColor: 'DarkTurquoise', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'bottom',
    position,

  }, {
    id: '5',
    type: 'input',
    data: { label: 'SPV' },
    style: { backgroundColor: 'DarkTurquoise', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'bottom',
    position,

  },
  {
    id: '6',
    type: 'input',
    data: { label: '3 INITIAL LP' },
    style: { backgroundColor: 'YellowGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'top',
    position,
  },
  {
    id: '7',
    type: 'input',
    data: { label: 'LP' },
    style: { backgroundColor: 'YellowGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'top',
    position,
  }, {
    id: '8',
    type: 'input',
    data: { label: 'LP' },
    style: { backgroundColor: 'YellowGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'top',
    position,
  }, {
    id: '9',
    type: 'input',
    data: { label: 'LP' },
    style: { backgroundColor: 'YellowGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'top',
    position,
  },
  {
    id: '10',
    type: 'input',
    data: { label: '2 GP' },
    style: { backgroundColor: 'lightBlue', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    direction: 'left',
    position,
  },
  {
    id: '11',
    type: 'default',
    style: { backgroundColor: 'red', borderStyle: 'none', borderRadius: 0, color: 'white', width: '90px', height: '30px' },
    data: { label: '2 Shareholder' },
    direction: 'left',
    sourcePosition: 'left',
    targetPosition: 'left',
    position,
  },
  {
    id: '12',
    type: 'default',
    style: { backgroundColor: 'red', borderStyle: 'none', borderRadius: 0, color: 'white', width: '90px', height: '30px' },
    data: { label: 'Advisor' },
    direction: 'left',
    position,
  },
  {
    id: '13',
    type: 'output',
    data: { label: '4 AIFM' },
    style: { backgroundColor: 'SeaGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    position,
  }, {
    id: '14',
    type: 'output',
    data: { label: '4 Despositary' },
    style: { backgroundColor: 'SeaGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    position,
  }, {
    id: '15',
    type: 'output',
    data: { label: '4 Bank' },
    style: { backgroundColor: 'SeaGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    position,
  }, {
    id: '16',
    type: 'output',
    data: { label: '4 Auditors' },
    style: { backgroundColor: 'SeaGreen', borderStyle: 'none', borderRadius: 0, width: '90px', height: '30px' },
    position,
  },
  { id: 'e1', source: '2', target: '1', type: edgeType, animated: true },
  { id: 'e2', source: '3', target: '1', type: edgeType, animated: true },
  { id: 'e3', source: '4', target: '1', type: edgeType, animated: true },
  { id: 'e4', source: '5', target: '1', type: edgeType, animated: true },

  { id: 'e5', source: '6', target: '1', type: edgeType, animated: true, label: '25%' },
  { id: 'e6', source: '7', target: '1', type: edgeType, animated: true, label: '15%' },
  { id: 'e7', source: '8', target: '1', type: edgeType, animated: true, label: '35%' },
  { id: 'e8', source: '9', target: '1', type: edgeType, animated: true, label: '25%' },

  { id: 'e9', source: '1', target: '10', type: edgeType, animated: true, label: '<0,01%' },

  //{ id: 'e10', source: '11', target: '10', type: edgeType, animated: true },

  { id: 'e11', source: '12', target: '13', type: edgeType, animated: true, type: 'default', label: 'Advises' },

  //{ id: 'e12', source: '1', target: '4', type: edgeType, animated: true, type: 'default'}, 
  //{ id: 'e13', source: '1', target: '5', type: edgeType, animated: true, type: 'default' }, 

];

export default data;