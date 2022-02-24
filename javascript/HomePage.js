let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('i8xhy').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Overview';}};document.getElementById('iu7ac').onclick = (event) => {
    event.preventDefault();
    { location.href= '/EnterPage';}};const onClickPaginationButton = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPagination(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ijlrm").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
        const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'projectName']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[revertIndex].projectName;
        }
       } catch (e) { console.log(e) };
            map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
        }
        window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    })
    }});}

    const findTypeOfPagination = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];

      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }

    }
  

    const returnChunkIndex = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  document.getElementById('iqjir').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Overview';}};document.getElementById('inie33').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('inie33')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/HomePage';}}});};document.getElementById('itb5fd').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('itb5fd')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/HomePage';}}});};document.getElementById('ikbppi').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ikbppi')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/HomePage';}}});};document.getElementById('ilertf').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ilertf')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/HomePage';}}});};document.getElementById('is3qxl').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('is3qxl')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/HomePage';}}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ijlrm").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectName'){
        subDataElements[i].textContent = data[data.length -i -1].projectName;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
  let numberOfPages = Math.ceil(data.length/subDataElements.length);
  let pagination = document.querySelector('[pagination-list="true"]');
  let chunk = 1;

    let paginationAttributes = [
      "pagination-first",
      "pagination-last",
      "pagination-previous",
      "pagination-next",
    ];

    for (let i = 0; i < pagination.children.length; ) {
      let foundAttr = false;

      paginationAttributes.forEach((attr) => {
        if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
          foundAttr = true;
        }
      });
      if (foundAttr === false) {
        pagination.removeChild(pagination.children[i]);
      } else {
        i++;
      }
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if (chunk !== numberOfPages - i) {
          chunk = numberOfPages - i;
          onClickPaginationButton(chunk, pagination);
        }
      };

      let numberOfFrontButtons =  findTypeOfPagination(pagination);
      pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

    }

    for (let i = 0; i < pagination.children.length; i++) {
      let child = pagination.children[i];
      if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== 1){
            chunk = 1;
            onClickPaginationButton(1, pagination);
          }
        };
      }

      if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== numberOfPages){
            chunk = numberOfPages;
            onClickPaginationButton( numberOfPages, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== returnChunkIndex(chunk,numberOfPages,'-')){
            chunk = returnChunkIndex(chunk,numberOfPages,'-');
            onClickPaginationButton(chunk, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
        child.onclick = function () {
          if(chunk !== returnChunkIndex(chunk,numberOfPages,'+')){
            chunk = returnChunkIndex(chunk,numberOfPages,'+');
            onClickPaginationButton(chunk, pagination);
          }
        };
      }
    };
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('in6m7')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').textContent = response.body.query.projectName ;}});let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ic8xwv')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').textContent = response.body.query.projectName ;}});let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('it5oxb')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').textContent = response.body.query.projectName ;}});let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('itxqgs')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').textContent = response.body.query.projectName ;}});let projectId = window.location.pathname.replace('/HomePage/','');
      if(projectId === '/HomePage' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ixxw8u')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').textContent = response.body.query.projectName ;}});};