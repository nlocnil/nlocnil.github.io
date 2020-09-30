function printSite(txtsrc){
  var p = document.createElement("p");
  p.src = txtsrc;
  document.appendBody(p);
}

function createModel(){
  const input = tf.layers.dense({shape:[1]});
  const d1 = tf.layers.dense({units: 5, activation: "relu"}).apply(input);
  const output = tf.layers.dense({units: 1, activation: "relu"}).apply(d1);
  const model = tf.model({inputs: input, outputs: output});

return model;

}

function run(){
  const model = createModel();
  tfvis.show.modelSummary({name: 'Model Summary'}, model);
printSite("altlog");
printSite("altlog2");

}


document.addEventListener("DOMContentLoaded", run);