function DomElementMine(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElementMine.prototype.createElemMine = function(){
    let block;
    let nameSelector = this.selector.substr(1);

    if (this.selector[0] === '.') {
        block = document.createElement('div');
        block.classList.add(nameSelector);
    }
    if (this.selector[0] === '#'){ 
        block = document.createElement('p')
        block.setAttribute('id', nameSelector);
    }
    
    block.style.cssText=`
        height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        fontSize: ${this.fontSize}px;
    `;
    block.textContent = 'text';
    document.body.appendChild(block)
}

const block1 = new DomElementMine('.ddd', 100, 200, 'red', 20);
const block2 = new DomElementMine('#ddd', 100, 200, 'green', 16);

block1.createElemMine();
block2.createElemMine();
