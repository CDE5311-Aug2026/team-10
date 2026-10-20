import React, {createContext,useContext} from 'react';
import {createPortal} from 'react-dom';
import {Signal,Wifi,BatteryFull,Image,Mic,ArrowUp} from 'lucide-react';
export type NodeProps=Record<string,any>;
export type Binding={action?:()=>void;text?:React.ReactNode;selected?:boolean;control?:{value:string;options?:string[];type?:string;placeholder?:string;onChange:(value:string)=>void};extra?:React.ReactNode;style?:React.CSSProperties;label?:string;hide?:boolean;src?:string};
export const DesignContext=createContext<{bind:(props:NodeProps)=>Binding;footer:HTMLElement|null;header:HTMLElement|null;send:(text:string)=>void;upload:()=>void;mic:()=>void;water:number;setWater:(n:number)=>void}>({bind:()=>({}),footer:null,header:null,send:()=>{},upload:()=>{},mic:()=>{},water:125,setWater:()=>{}});
export function N({as:Tag='div',children,...props}:NodeProps){
 const ctx=useContext(DesignContext);const b=ctx.bind({...props,children});if(b.hide)return null;
 const isNav=(props['data-name']||'').startsWith('Tap bar-');
 const isHeader=props['data-name']==='Header'||props['data-name']==='Ai Chat - Head';
 const input=b.control;
 const body=input?<><select aria-label={b.label} value={input.value} onChange={e=>input.onChange(e.target.value)} className="design-field"><option value="">{input.placeholder}</option>{input.options?.map(v=><option key={v}>{v}</option>)}</select><img className="field-chevron" src="/assets/3cb30.svg" alt=""/></>:b.text!==undefined?b.text:children;
 const controlBody=input?.type==='time'?<><span className="time-value">{input.value||input.placeholder}</span><input className="native-time" aria-label={b.label||'Last drink started'} type="time" value={input.value} onChange={e=>input.onChange(e.target.value)}/><img className="field-chevron" src="/assets/3cb30.svg" alt=""/></>:input&&input.type?<input className="design-field" aria-label={b.label} type={input.type} value={input.value} placeholder={input.placeholder} onChange={e=>input.onChange(e.target.value)}/>:body;
 const action=b.action;const style={...props.style,...b.style,...(isNav?{position:'absolute',top:'auto',bottom:0,left:'50%',transform:'translateX(-50%)'}:{})};
 const el=React.createElement(Tag,{...props,...(b.src?{src:b.src}:{}),style,className:[props.className,b.selected?'design-selected':'',isNav?'design-bottom-nav':''].filter(Boolean).join(' '),...(action?{role:Tag==='button'?undefined:'button',tabIndex:0,'aria-label':b.label,onClick:(e:React.MouseEvent)=>{e.preventDefault();e.stopPropagation();action()},onKeyDown:(e:React.KeyboardEvent)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();action()}}}:{}),...(b.selected!==undefined?{'aria-pressed':b.selected}:{}),...(Tag==='button'?{type:'button'}:{})},Tag==='img'?undefined:<>{controlBody}{b.extra}</>);
 if(isNav)return ctx.footer?createPortal(el,ctx.footer):null;
 if(isHeader)return <>{props['data-node-id']==='190:6015'&&<div style={{height:187,width:402,flexShrink:0}}/>}{ctx.header?createPortal(el,ctx.header):null}</>;
 return el;
}
export function CodeConnectSnippet(props:NodeProps){return <N as="div" {...props} className="design-snippet"/>}
export function StatusBarIPhone17Pro(_props:NodeProps){const ctx=useContext(DesignContext);const el=<div className="status-bar" aria-hidden="true"><span>9:41</span><i/><div><Signal size={18} fill="white"/><Wifi size={18}/><BatteryFull size={27}/></div></div>;return ctx.header?createPortal(el,ctx.header):null}
export function AIChatBox(_props:NodeProps){const c=useContext(DesignContext);const [text,setText]=React.useState('');return <form className="gallery-composer" onSubmit={e=>{e.preventDefault();c.send(text)}}><input aria-label="What would you like to know?" placeholder="What would you like to know?" value={text} onChange={e=>setText(e.target.value)}/><div><button type="button" aria-label="Attach image" onClick={c.upload}><Image size={20}/></button><button type="button" aria-label="Use microphone" onClick={c.mic}><Mic size={20}/></button><button aria-label="Send message" className="composer-send"><ArrowUp size={22}/></button></div></form>}
export function IconButton({children}:NodeProps){return <>{children}</>}
export function Sliders(_props:NodeProps){const c=useContext(DesignContext);return <input className="water-slider" type="range" min="0" max="250" step="5" value={c.water} aria-label="Water amount in millilitres" onChange={e=>c.setWater(Number(e.target.value))}/>}
export function Track(){return null} export function Fill(){return null}export function Knob(){return null}
