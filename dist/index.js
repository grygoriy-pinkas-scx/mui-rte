"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Immutable=_interopDefault(require("immutable")),classNames=_interopDefault(require("classnames")),styles$6=require("@material-ui/core/styles"),Paper=_interopDefault(require("@material-ui/core/Paper")),draftJs=require("draft-js"),FormatBoldIcon=_interopDefault(require("@material-ui/icons/FormatBold")),FormatItalicIcon=_interopDefault(require("@material-ui/icons/FormatItalic")),FormatUnderlinedIcon=_interopDefault(require("@material-ui/icons/FormatUnderlined")),StrikethroughIcon=_interopDefault(require("@material-ui/icons/StrikethroughS")),HighlightIcon=_interopDefault(require("@material-ui/icons/Highlight")),TitleIcon=_interopDefault(require("@material-ui/icons/Title")),InsertLinkIcon=_interopDefault(require("@material-ui/icons/InsertLink")),PhotoLibraryIcon=_interopDefault(require("@material-ui/icons/PhotoLibrary")),FormatListNumberedIcon=_interopDefault(require("@material-ui/icons/FormatListNumbered")),FormatListBulletedIcon=_interopDefault(require("@material-ui/icons/FormatListBulleted")),FormatIndentIncreaseIcon=_interopDefault(require("@material-ui/icons/FormatIndentIncrease")),FormatIndentDecreaseIcon=_interopDefault(require("@material-ui/icons/FormatIndentDecrease")),CodeIcon=_interopDefault(require("@material-ui/icons/Code")),FormatClearIcon=_interopDefault(require("@material-ui/icons/FormatClear")),SaveIcon=_interopDefault(require("@material-ui/icons/Save")),UndoIcon=_interopDefault(require("@material-ui/icons/Undo")),RedoIcon=_interopDefault(require("@material-ui/icons/Redo")),IconButton=_interopDefault(require("@material-ui/core/IconButton")),MuiLink=_interopDefault(require("@material-ui/core/Link")),Button=_interopDefault(require("@material-ui/core/Button")),Grid=_interopDefault(require("@material-ui/core/Grid")),Popover=_interopDefault(require("@material-ui/core/Popover")),TextField=_interopDefault(require("@material-ui/core/TextField")),ButtonGroup=_interopDefault(require("@material-ui/core/ButtonGroup")),InsertPhotoIcon=_interopDefault(require("@material-ui/icons/InsertPhoto")),MovieIcon=_interopDefault(require("@material-ui/icons/Movie")),CheckIcon=_interopDefault(require("@material-ui/icons/Check")),DeleteIcon=_interopDefault(require("@material-ui/icons/DeleteOutline")),FormatAlignCenter=_interopDefault(require("@material-ui/icons/FormatAlignCenter")),FormatAlignLeft=_interopDefault(require("@material-ui/icons/FormatAlignLeft")),FormatAlignRight=_interopDefault(require("@material-ui/icons/FormatAlignRight")),List=_interopDefault(require("@material-ui/core/List")),ListItem=_interopDefault(require("@material-ui/core/ListItem")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ToolbarButton=function(t){var e=t.inlineMode?"small":t.size||"medium",n=t.inlineMode?"-toolbar":"",r=(t.editorId||"mui-rte")+"-"+(t.id||t.label)+"-button"+n,o={id:r,onMouseDown:function(e){e.preventDefault(),t.onClick&&t.onClick(t.style,t.type,r,t.inlineMode)},disabled:t.disabled||!1};return t.icon?React__default.createElement(IconButton,__assign({},o,{"aria-label":t.label,color:t.active?"primary":"default",size:e}),t.icon):t.component?React__default.createElement(t.component,__assign({},o,{active:t.active||!1})):null},getSelectionInfo=function(e){var t=e.getSelection(),n=t.getStartOffset(),r=e.getCurrentContent(),o=r.getBlockForKey(t.getStartKey()),a=e.getCurrentInlineStyle(),i=o.getEntityAt(n),l="";i&&(l=r.getEntity(i).getType());return{inlineStyle:a,blockType:o.getType(),entityType:l,linkKey:i,block:o}},removeBlockFromMap=function(e,t){var n=e.getCurrentContent(),r=draftJs.Modifier.removeRange(n,new draftJs.SelectionState({anchorKey:t.getKey(),anchorOffset:0,focusKey:t.getKey(),focusOffset:t.getLength()}),"backward"),o=r.getBlockMap().delete(t.getKey());return r.merge({blockMap:o,selectionAfter:n.getSelectionAfter()})},atomicBlockExists=function(t,e){if(e)return e.find(function(e){return"atomic"===e.type&&e.name===t&&void 0!==e.atomicComponent})},isGreaterThan=function(e,t){return!!t&&t<e},clearInlineStyles=function(n,e){var t=["BOLD","ITALIC","UNDERLINE"];return e&&(t=t.concat(Object.getOwnPropertyNames(e))),t.reduce(function(e,t){return draftJs.Modifier.removeInlineStyle(e,n.getSelection(),t)},n.getCurrentContent())},getEditorBounds=function(e){var t=draftJs.getVisibleSelectionRect(window);return{selectionRect:t?{top:null==t?void 0:t.top,left:null==t?void 0:t.left}:null,editorRect:e.getBoundingClientRect()}},getLineNumber=function(e){var t=e.getSelection().getStartKey();return e.getCurrentContent().getBlockMap().keySeq().findIndex(function(e){return e===t})},STYLE_TYPES=[{label:"H2",name:"title",style:"header-two",icon:React__default.createElement(TitleIcon,null),type:"block"},{label:"Bold",name:"bold",style:"BOLD",icon:React__default.createElement(FormatBoldIcon,null),type:"inline"},{label:"Italic",name:"italic",style:"ITALIC",icon:React__default.createElement(FormatItalicIcon,null),type:"inline"},{label:"Underline",name:"underline",style:"UNDERLINE",icon:React__default.createElement(FormatUnderlinedIcon,null),type:"inline"},{label:"Strikethrough",name:"strikethrough",style:"STRIKETHROUGH",icon:React__default.createElement(StrikethroughIcon,null),type:"inline"},{label:"Highlight",name:"highlight",style:"HIGHLIGHT",icon:React__default.createElement(HighlightIcon,null),type:"inline"},{label:"Undo",name:"undo",style:"UNDO",icon:React__default.createElement(UndoIcon,null),type:"callback"},{label:"Redo",name:"redo",style:"REDO",icon:React__default.createElement(RedoIcon,null),type:"callback"},{label:"Link",name:"link",style:"LINK",icon:React__default.createElement(InsertLinkIcon,null),type:"callback",id:"link-control"},{label:"Media",name:"media",style:"IMAGE",icon:React__default.createElement(PhotoLibraryIcon,null),type:"callback",id:"media-control"},{label:"UL",name:"bulletList",style:"unordered-list-item",icon:React__default.createElement(FormatListBulletedIcon,null),type:"block"},{label:"OL",name:"numberList",style:"ordered-list-item",icon:React__default.createElement(FormatListNumberedIcon,null),type:"block"},{label:"Blockquote",name:"quote",style:"blockquote",icon:React__default.createElement(FormatIndentIncreaseIcon,null),type:"block"},{label:"Code Block",name:"code",style:"code-block",icon:React__default.createElement(CodeIcon,null),type:"block"},{label:"Clear",name:"clear",style:"clear",icon:React__default.createElement(FormatClearIcon,null),type:"callback"},{label:"Save",name:"save",style:"save",icon:React__default.createElement(SaveIcon,null),type:"callback"}],Toolbar=function(a){var e=React.useState(a.controls?[]:STYLE_TYPES),t=e[0],n=e[1],i=a.editorState,r=a.inlineMode?"-inline-toolbar":"-toolbar";return React.useEffect(function(){if(a.controls){var r=[];a.controls.filter(function(e,t){return a.controls.indexOf(e)>=t}).forEach(function(t){var e=STYLE_TYPES.find(function(e){return e.name===t});if(e)r.push(e);else if(a.customControls){var n=a.customControls.find(function(e){return e.name===t});n&&"atomic"!==n.type&&(n.icon||n.component)&&r.push({id:n.id||n.name+"Id",name:n.name,label:n.name,style:n.name.toUpperCase(),icon:n.icon,component:n.component,type:n.type,clickFnName:"onCustomClick"})}}),n(r)}},[a.controls,a.customControls]),React__default.createElement("div",{id:a.id+r,className:a.className},t.map(function(e){if(a.inlineMode&&"inline"!==e.type&&"link"!==e.name&&"clear"!==e.name)return null;var t=!1,n=a.onClick;if(a.isActive)if("inline"===e.type)t=i.getCurrentInlineStyle().has(e.style);else if("block"===e.type){var r=i.getSelection(),o=i.getCurrentContent().getBlockForKey(r.getStartKey());o&&(t=e.style===o.getType()),"quote"===e.name&&t&&(e.icon=React__default.createElement(FormatIndentDecreaseIcon,null)),console.log("style",t,e)}else"IMAGE"!==e.style&&"LINK"!==e.style||(t=e.style===getSelectionInfo(i).entityType);else t=!1;return React__default.createElement(ToolbarButton,{id:e.id,editorId:a.id,key:"key-"+e.label,active:t,label:e.label,onClick:n,style:e.style,type:e.type,icon:e.icon,component:e.component,inlineMode:a.inlineMode,disabled:a.disabled,size:a.size})}))},Link=function(e){var t=e.contentState.getEntity(e.entityKey).getData(),n=t.url,r=t.className;return React__default.createElement(MuiLink,{href:n,className:r+" editor-anchor",target:"_blank"},e.children)},styles=function(e){var t=e.shadows;return styles$6.createStyles({root:{margin:"5px 0 1px",outline:"none"},editable:{cursor:"pointer","&:hover":{boxShadow:t[3]}},focused:{boxShadow:t[3]},centered:{textAlign:"center"},leftAligned:{textAlign:"left"},rightAligned:{textAlign:"right"}})},Media=function(e){var t,n,r,o=e.contentState.getEntity(e.block.getEntityAt(0)).getData(),a=o.url,i=o.width,l=o.height,c=o.alignment,u=o.type,s=e.blockProps,d=s.onClick,f=s.readOnly,m=s.focusKey;return React__default.createElement("div",{className:classNames(((t={})[e.classes.centered]="center"===c,t[e.classes.leftAligned]="left"===c,t[e.classes.rightAligned]="right"===c,t))},(r={src:a,className:classNames(e.classes.root,((n={})[e.classes.editable]=!f,n[e.classes.focused]=!f&&m===e.block.getKey(),n)),width:i,height:"video"===u?"auto":l,onClick:function(){f||d(e.block)}},u&&"image"!==u?"video"===u?React__default.createElement("video",__assign({},r,{autoPlay:!1,controls:!0})):null:React__default.createElement("img",__assign({},r))))},Media$1=styles$6.withStyles(styles,{withTheme:!0})(Media),styles$1=function(e){var t=e.palette;return styles$6.createStyles({root:{fontStyle:"italic",color:t.grey[800],borderLeft:"4px solid "+t.grey.A100}})},Blockquote=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},Blockquote$1=styles$6.withStyles(styles$1,{withTheme:!0})(Blockquote),styles$2=function(e){var t=e.spacing,n=e.palette;return styles$6.createStyles({root:{backgroundColor:n.grey[200],padding:t(1,2,1,2)}})},CodeBlock=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},CodeBlock$1=styles$6.withStyles(styles$2,{withTheme:!0})(CodeBlock),styles$3=function(e){var t=e.spacing;return styles$6.createStyles({linkPopover:{padding:t(2,2,2,2),maxWidth:250},linkTextField:{width:"100%"}})},UrlPopover=function(e){function t(e,t){var n,r;if(""!==e){var o=parseInt(e,10);isNaN(o)||i(__assign(__assign({},a),((r={})[t]=o,r)))}else i(__assign(__assign({},a),((n={})[t]=void 0,n)))}var n=React.useState(e.data||{url:void 0,width:void 0,height:void 0,alignment:void 0,type:void 0}),a=n[0],i=n[1],r=e.classes;return React__default.createElement(Popover,{open:void 0!==e.anchor,anchorEl:e.anchor,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},React__default.createElement("div",{className:r.linkPopover},React__default.createElement(Grid,{container:!0,spacing:1},React__default.createElement(Grid,{container:!0,item:!0,xs:!0,spacing:1},React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(TextField,{className:r.linkTextField,onChange:function(e){return i(__assign(__assign({},a),{url:e.target.value}))},label:"URL",defaultValue:e.data&&e.data.url,autoFocus:!0,InputLabelProps:{shrink:!0}})),e.isMedia?React__default.createElement(React__default.Fragment,null,React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:a.type&&"image"!==a.type?"default":"primary",size:"small",onClick:function(){return i(__assign(__assign({},a),{type:"image"}))}},React__default.createElement(InsertPhotoIcon,null)),React__default.createElement(Button,{color:"video"===a.type?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{type:"video"}))}},React__default.createElement(MovieIcon,null)))),React__default.createElement(Grid,{item:!0,xs:6},React__default.createElement(TextField,{onChange:function(e){return t(e.target.value,"width")},value:a.width||"",label:"Width",InputLabelProps:{shrink:!0}})),React__default.createElement(Grid,{item:!0,xs:6},React__default.createElement(TextField,{onChange:function(e){return t(e.target.value,"height")},value:a.height||"",label:"Height",InputLabelProps:{shrink:!0}})),React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:"left"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"left"}))}},React__default.createElement(FormatAlignLeft,null)),React__default.createElement(Button,{color:"center"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"center"}))}},React__default.createElement(FormatAlignCenter,null)),React__default.createElement(Button,{color:"right"===a.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},a),{alignment:"right"}))}},React__default.createElement(FormatAlignRight,null))))):null),React__default.createElement(Grid,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end"},e.data&&e.data.url?React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,"")}},React__default.createElement(DeleteIcon,null)):null,React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,a.url,a.width,a.height,a.alignment,a.type)}},React__default.createElement(CheckIcon,null))))))},UrlPopover$1=styles$6.withStyles(styles$3,{withTheme:!0})(UrlPopover),styles$4=function(){return styles$6.createStyles({container:{minWidth:"200px",position:"absolute",zIndex:10},item:{cursor:"pointer"}})},Autocomplete=function(n){if(!n.items.length)return null;var r=n.classes;return React__default.createElement(Paper,{className:r.container,style:{top:n.top,left:n.left}},React__default.createElement(List,{dense:!0},n.items.map(function(e,t){return React__default.createElement(ListItem,{key:t,className:r.item,selected:t===n.selectedIndex,onClick:function(){return n.onClick(t)}},e.content)})))},Autocomplete$1=styles$6.withStyles(styles$4,{withTheme:!0})(Autocomplete),styles$5=function(e){var t=e.spacing,n=e.typography,r=e.palette;return styles$6.createStyles({root:{},container:{margin:t(1,0,0,0),position:"relative",fontFamily:n.body1.fontFamily,fontSize:n.body1.fontSize,"& figure":{margin:0}},inheritFontSize:{fontSize:"inherit"},editor:{},editorContainer:{margin:t(1,0,0,0),cursor:"text",width:"100%",padding:t(0,0,1,0)},editorReadOnly:{borderBottom:"none"},error:{borderBottom:"2px solid red"},hidePlaceholder:{display:"none"},placeHolder:{color:r.grey[600],position:"absolute",outline:"none"},linkPopover:{padding:t(2,2,2,2)},linkTextField:{width:"100%"},anchorLink:{},toolbar:{},inlineToolbar:{maxWidth:"180px",position:"absolute",padding:"5px",zIndex:10}})},blockRenderMap=Immutable.Map({blockquote:{element:"blockquote",wrapper:React__default.createElement(Blockquote$1,null)},"code-block":{element:"pre",wrapper:React__default.createElement(CodeBlock$1,null)}}),styleRenderMap={STRIKETHROUGH:{textDecoration:"line-through"},HIGHLIGHT:{backgroundColor:"yellow"}},hasCommandModifier=draftJs.KeyBindingUtil.hasCommandModifier,autocompleteMinSearchCharCount=2,lineHeight=26,defaultInlineToolbarControls=["bold","italic","underline","clear"],findLinkEntities=function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===n.getEntity(t).getType()},t)},findDecoWithRegex=function(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)},useEditorState=function(e){var t=[{strategy:findLinkEntities,component:Link}];e.decorators&&e.decorators.forEach(function(n){return t.push({strategy:function(e,t){findDecoWithRegex(n.regex,e,t)},component:n.component})});var n=new draftJs.CompositeDecorator(t),r=e.defaultValue||e.value;return r?draftJs.EditorState.createWithContent(draftJs.convertFromRaw(JSON.parse(r)),n):draftJs.EditorState.createEmpty(n)},MUIRichTextEditor=function(l,e){var t,n,r,u=l.classes,o=l.controls,a=l.customControls,i=React.useState({}),m=i[0],c=i[1],s=React.useState(!1),d=s[0],f=s[1],g=React.useState(""),p=g[0],_=g[1],y=React.useState(0),v=y[0],h=y[1],E=React.useState(function(){return useEditorState(l)}),C=E[0],R=E[1],b=React.useState(""),k=b[0],S=b[1],I=React.useRef(null),T=l.id||"mui-rte",B=React.useRef(void 0),L=React.useRef(C),M=React.useRef(void 0),D=React.useRef(void 0),F=React.useRef(void 0),x=l.autocomplete&&l.autocomplete.suggestLimit||5,A=React.useRef(!0),N=React.useRef(void 0),w=React.useRef(void 0),P=React.useRef(!1),q=React.useRef({start:0,end:0});React.useImperativeHandle(e,function(){return{focus:function(){j()},save:function(){V()},insertAtomicBlock:function(e,t){Q(e,t)},insertAtomicBlockSync:function(e,t){Q(e,t)},insertAtomicBlockAsync:function(e,t,n){X(e,t,n)}}}),React.useEffect(function(){var e=useEditorState(l);return R(e),te(!0),function(){te()}},[l.value,l.defaultValue]),React.useEffect(function(){l.onChange&&l.onChange(C),L.current=C},[C]),React.useEffect(function(){B.current=m.toolbarPosition},[m.toolbarPosition]),React.useEffect(function(){p.length<autocompleteMinSearchCharCount&&h(0)},[p]);function J(){_(""),F.current=void 0,D.current=void 0}function U(e){var t=e.target.nodeName;J(),"IMG"!==t&&"VIDEO"!==t&&setTimeout(function(){var e,t=L.current.getSelection();if(t.isCollapsed()||void 0!==B&&q.current.start===t.getStartOffset()&&q.current.end===t.getEndOffset()){var n=getSelectionInfo(L.current);return"IMAGE"===n.entityType?void ue(n.block):void c(__assign(__assign({},m),{toolbarPosition:void 0}))}q.current={start:t.getStartOffset(),end:t.getEndOffset()};var r=null===(e=I.current)||void 0===e?void 0:e.editor;if(r){var o=getEditorBounds(r),a=o.editorRect,i=o.selectionRect;if(i){var l={top:r.offsetTop-48+(i.top-a.top),left:r.offsetLeft+(i.left-a.left)};c(__assign(__assign({},m),{toolbarPosition:l}))}}},1)}function O(e){var t=e||v,n=z();if(n.length>t){var r=n[t],o=D.current,a=o.getFocusOffset()+p.length+1,i=o.merge({focusOffset:a});if(M.current.atomicBlockName)!function(e,t,n){if(atomicBlockExists(e,l.customControls)){var r=draftJs.Modifier.removeRange(L.current.getCurrentContent(),t,"forward"),o=draftJs.EditorState.push(L.current,r,"remove-range"),a=fe(o,e.toUpperCase(),{value:n},{selection:o.getCurrentContent().getSelectionAfter()});W(a)}}(M.current.atomicBlockName,i,r.value);else!function(e,t){var n=C.getCurrentContent().createEntity("AC_ITEM","IMMUTABLE").getLastCreatedEntityKey(),r=draftJs.Modifier.replaceText(L.current.getCurrentContent(),e,t,L.current.getCurrentInlineStyle(),n),o=draftJs.EditorState.push(L.current,r,"insert-characters");if(!1===M.current.insertSpaceAfter)W(o);else{var a=draftJs.Modifier.insertText(o.getCurrentContent(),o.getSelection()," ",o.getCurrentInlineStyle());W(draftJs.EditorState.push(o,a,"insert-characters"))}}(i,r.value)}H()}function K(e,t,n){var r=getSelectionInfo(e),o=e.getCurrentContent(),a=r.linkKey,i=void 0;a&&(i=o.getEntity(a).getData()),c({urlData:i,urlKey:a,toolbarPosition:n?m.toolbarPosition:void 0,anchorUrlPopover:n?document.getElementById(T+"-"+t+"-control-button-toolbar"):document.getElementById(T+"-"+t+"-control-button"),urlIsMedia:"media"===t||void 0})}function $(e,t){K(t||C,"media",e)}function G(e,t,n,r){if("inline"===t)return ce(e);if("block"===t)return le(e);switch(e){case"UNDO":R(draftJs.EditorState.undo(C));break;case"REDO":R(draftJs.EditorState.redo(C));break;case"LINK":o=r,C.getSelection().isCollapsed()||K(C,"link",o);break;case"IMAGE":$(r);break;case"clear":!function(){if(void 0!==w.current){var e=clearInlineStyles(C,w.current),t=getSelectionInfo(C),n=draftJs.EditorState.push(C,e,"change-inline-style");R(draftJs.RichUtils.toggleBlockType(n,t.blockType))}}();break;case"save":V();break;default:!function(e,t){if(l.customControls)for(var n=0,r=l.customControls;n<r.length;n++){var o=r[n];if(o.name.toUpperCase()===e){if(o.onClick){setTimeout(function(){var e;return null===(e=I.current)||void 0===e?void 0:e.blur()},0);var a=o.onClick(C,o.name,document.getElementById(t));a?a.getSelection().isCollapsed()?R(a):oe(a):C.getSelection().isCollapsed()||ie()}break}}}(e,n)}var o}var H=function(){J(),h(0),ie()},z=function(){return p.length<autocompleteMinSearchCharCount?[]:M.current.items.filter(function(e){return 0<e.keys.filter(function(e){return e.includes(p)}).length}).splice(0,x)},W=function(e){R(e)},j=function(){Y(),l.onFocus&&l.onFocus()},Y=function(){f(!0),setTimeout(function(){var e;return null===(e=I.current)||void 0===e?void 0:e.focus()},0)},V=function(){l.onSave&&l.onSave(JSON.stringify(draftJs.convertToRaw(C.getCurrentContent())))},Q=function(e,t){var n=atomicBlockExists(e,l.customControls);if(n){var r=fe(C,n.name.toUpperCase(),t,{selection:C.getCurrentContent().getSelectionAfter()});oe(r)}},X=function(n,e,t){var r=Z(n,t),o=r.getFocusOffset()+1,a=r.merge({focusOffset:o});e.then(function(e){var t=fe(L.current,n,e.data,{selection:a});W(t)}).catch(function(e){if(!e){var t=draftJs.Modifier.removeRange(L.current.getCurrentContent(),a,"forward");W(draftJs.EditorState.push(L.current,t,"remove-range"))}})},Z=function(e,t){var n=t||e+"...",r=L.current.getCurrentContent(),o=r.createEntity("ASYNC_ATOMICBLOCK","IMMUTABLE").getLastCreatedEntityKey(),a=draftJs.Modifier.insertText(L.current.getCurrentContent(),r.getSelectionAfter(),n,void 0,o),i=r.getSelectionAfter(),l=draftJs.EditorState.push(L.current,a,"insert-characters");return W(l),i},ee=function(e,t){var n=e.getCurrentContent().getPlainText("").length;return isGreaterThan(n+t,l.maxLength)?"handled":"not-handled"},te=function(e){var t;void 0===e&&(e=!1);var n=null===(t=I.current)||void 0===t?void 0:t.editor;n&&(n.removeEventListener("mouseup",U),e&&n.addEventListener("mouseup",U))},ne=function(e){var t,n=m.urlKey;if(!e)return n&&(t=C.getSelection(),R(draftJs.RichUtils.toggleLink(C,t,null))),void ae();var r=C.getCurrentContent(),o=C,a={url:e,className:u.anchorLink};if(n)r.replaceEntityData(n,a),o=draftJs.EditorState.push(C,r,"apply-entity");else{var i=r.createEntity("LINK","MUTABLE",a),l=i.getLastCreatedEntityKey(),c=draftJs.EditorState.set(C,{currentContent:i});o=draftJs.RichUtils.toggleLink(c,c.getSelection(),l)}oe(o)},re=function(e,t,n,r,o){var a,i,l,c,u=m.urlKey;if(!e)return u&&(a=C.getSelection().getStartKey(),i=C.getCurrentContent().getBlockForKey(a),l=removeBlockFromMap(C,i),c=draftJs.EditorState.push(C,l,"remove-range"),R(c)),void ae();var s=C.getCurrentContent(),d={url:e,width:t,height:n,alignment:r,type:o};if(u){s.replaceEntityData(u,d);var f=draftJs.EditorState.push(C,s,"apply-entity");oe(draftJs.EditorState.forceSelection(f,f.getCurrentContent().getSelectionAfter()))}else{f=fe(C,"IMAGE",d);oe(draftJs.EditorState.forceSelection(f,f.getCurrentContent().getSelectionAfter()))}S("")},oe=function(e){R(e),ae()},ae=function(){ie(),c(__assign(__assign({},m),{anchorUrlPopover:void 0,urlKey:void 0,urlIsMedia:void 0,urlData:void 0}))},ie=function(){setTimeout(function(){var e;return null===(e=I.current)||void 0===e?void 0:e.blur()},0),setTimeout(function(){var e;return null===(e=I.current)||void 0===e?void 0:e.focus()},1)},le=function(e){R(draftJs.RichUtils.toggleBlockType(C,e))},ce=function(e){R(draftJs.RichUtils.toggleInlineStyle(C,e))},ue=function(e){var t=draftJs.SelectionState.createEmpty(e.getKey()),n=draftJs.EditorState.forceSelection(L.current,t);L.current=n,S(e.getKey()),R(n),$(!1,n)},se=function(){var e,t=JSON.parse(JSON.stringify(styleRenderMap));null===(e=l.customControls)||void 0===e||e.filter(function(e){return"inline"===e.type&&e.inlineStyle}).forEach(function(e){t[e.name.toUpperCase()]=e.inlineStyle}),w.current=t},de=function(){var e,t={};null===(e=l.customControls)||void 0===e||e.filter(function(e){return"block"===e.type&&e.blockWrapper}).forEach(function(e){t[e.name.toUpperCase()]={element:"div",wrapper:e.blockWrapper}}),N.current=draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap,Immutable.Map(t))},fe=function(e,t,n,r){var o=e.getCurrentContent().createEntity(t,"IMMUTABLE",n),a=o.getLastCreatedEntityKey(),i=draftJs.EditorState.set(e,__assign({currentContent:o},r));return draftJs.AtomicBlockUtils.insertAtomicBlock(i,a," ")},me=void 0===l.toolbar||l.toolbar,ge=l.inlineToolbarControls||defaultInlineToolbarControls,pe=void 0===l.readOnly||!l.readOnly,_e="",ye=null;d||C.getCurrentContent().hasText()||(ye=React__default.createElement("div",{className:classNames(u.editorContainer,u.placeHolder,((t={})[u.error]=l.error,t)),tabIndex:0,onFocus:function(){!1!==A.current?(j(),A.current=!1):Y()}},l.label||""),_e=u.hidePlaceholder);return React__default.createElement("div",{id:T+"-root",className:u.root},React__default.createElement("div",{id:T+"-container",className:classNames(u.container,((n={})[u.inheritFontSize]=l.inheritFontSize,n))},l.autocomplete&&F.current?React__default.createElement(Autocomplete$1,{items:z(),top:F.current.top,left:F.current.left,onClick:O,selectedIndex:v}):null,l.inlineToolbar&&pe&&m.toolbarPosition?React__default.createElement(Paper,{className:u.inlineToolbar,style:{top:m.toolbarPosition.top,left:m.toolbarPosition.left}},React__default.createElement(Toolbar,{id:T,editorState:C,onClick:G,controls:ge,customControls:a,inlineMode:!0,isActive:!0})):null,me?React__default.createElement(Toolbar,{id:T,editorState:C,onClick:G,controls:o,customControls:a,className:u.toolbar,disabled:!pe,size:l.toolbarButtonSize,isActive:d}):null,ye,React__default.createElement("div",{id:T+"-editor",className:u.editor},React__default.createElement("div",{id:T+"-editor-container",className:classNames(_e,u.editorContainer,((r={})[u.editorReadOnly]=!pe,r[u.error]=l.error,r)),onMouseDown:function(){P.current=!0},onBlur:function(){P.current=!1,f(!1),l.onBlur&&l.onBlur(),m.anchorUrlPopover||c(__assign(__assign({},m),{toolbarPosition:void 0}))}},React__default.createElement(draftJs.Editor,__assign({blockRenderMap:(void 0===N.current&&de(),N.current),blockRendererFn:function(e){if("atomic"===e.getType()){var t=C.getCurrentContent(),n=e.getEntityAt(0);if(n){var r=t.getEntity(n).getType();if("IMAGE"===r)return{component:Media$1,editable:!1,props:{onClick:ue,readOnly:l.readOnly,focusKey:k}};var o=atomicBlockExists(r.toLowerCase(),l.customControls);if(o)return{component:o.atomicComponent,editable:!1,props:t.getEntity(e.getEntityAt(0)).getData()}}}return null},customStyleFn:function(e){var n=(void 0===w.current&&se(),w.current);return e.toJS().reduce(function(e,t){return n[t]},{})},editorState:C,onChange:W,onFocus:function(){if(j(),!0!==P.current){var e=draftJs.EditorState.forceSelection(C,C.getSelection());setTimeout(function(){return R(draftJs.EditorState.moveFocusToEnd(e))},0)}else P.current=!1},readOnly:l.readOnly,handleKeyCommand:function(t,e){var n=draftJs.RichUtils.handleKeyCommand(e,t);if(n)return W(n),"handled";if(t.includes("mui-autocomplete"))return"mui-autocomplete-insert"===t&&O(),"mui-autocomplete-end"===t&&H(),"handled";if(l.keyCommands){var r=l.keyCommands.find(function(e){return e.name===t});if(r){var o=r.callback(e);return W(o),"handled"}}return"not-handled"},handleBeforeInput:function(e,t){if(" "===e&&p.length)J();else if(D.current)_(p+e);else{var n=function(t){if(l.autocomplete){var e=l.autocomplete.strategies.filter(function(e){return e.triggerChar===t});return e.length?e[0]:void 0}}(e);n&&(M.current=n,function(){var e,t=null===(e=I.current)||void 0===e?void 0:e.editor;if(t){var n=getEditorBounds(t),r=n.editorRect,o=n.selectionRect,a=getLineNumber(C),i=o?o.top:r.top+lineHeight*a,l=o?o.left:r.left,c={top:t.offsetTop+(i-r.top)+lineHeight,left:t.offsetLeft+(l-r.left)};D.current||(D.current=L.current.getSelection()),F.current=c}}())}return ee(t,1)},handlePastedText:function(e,t,n){return ee(n,e.length)},handleReturn:function(e,t){return ee(t,1)},keyBindingFn:function(t){if(hasCommandModifier(t)&&l.keyCommands){var e=l.keyCommands.find(function(e){return e.key===t.keyCode});if(e)return e.name}if(p){var n=function(e){var t=z().length,n=t<x?t:x;switch(e.key){case"ArrowDown":return h(0===v&&1===t||v+1===n?0:v+1<n?v+1:v),"mui-autocomplete-navigate";case"ArrowUp":return h(v?v-1:n-1),"mui-autocomplete-navigate";case"Enter":return"mui-autocomplete-insert";case"Escape":return"mui-autocomplete-end";default:return null}}(t);if(n)return n}var r,o,a=draftJs.getDefaultKeyBinding(t);return r=a,o=L.current.getCurrentContent().getLastBlock().getText(),"backspace"===r&&M.current&&o.substr(o.length-1)===M.current.triggerChar?J():F.current&&"backspace"===r&&p.length?_(p.substr(0,p.length-1)):F.current||"backspace"!==r&&"split-block"!==r||J(),a},ref:I},l.draftEditorProps)))),m.anchorUrlPopover?React__default.createElement(UrlPopover$1,{data:m.urlData,anchor:m.anchorUrlPopover,onConfirm:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e?re.apply(void 0,t):ne.apply(void 0,t)},isMedia:m.urlIsMedia}):null))},MUIRichTextEditor$1=styles$6.withStyles(styles$5,{withTheme:!0,name:"MUIRichTextEditor"})(React.forwardRef(MUIRichTextEditor));exports.default=MUIRichTextEditor$1;
