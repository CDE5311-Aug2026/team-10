import {AiStar} from './updated';
import {Heart,ChevronDown,Target,GlassWater} from 'lucide-react';
import {type Drink} from './data';
export function AiInsights({records,goal,chat}:{records:Drink[];goal:string;chat:()=>void}){
 const hasGoal=goal&&goal!=='Not set';
 const latest=records.filter(d=>!d.id.startsWith('sample')&&d.source!=='Sample history'&&new Date(d.date)<=new Date()).sort((a,b)=>+new Date(b.date)-+new Date(a.date))[0];
 const suggestion=latest?'Before your next choice, pause and notice how you feel.':'Start with a plan that feels right for you today.';
 return <section className="ai-insights compact-insights advice-only" aria-label="AI Insights"><div className="insights-heading"><AiStar/><h2>AI Insights</h2><span>FOR YOU</span></div><div className="ai-advice-row"><GlassWater size={21}/><p>{suggestion}</p></div><p className="insight-nudge"><Heart size={15}/><span>Small steps count. Keep choosing at your pace.</span></p><details className="insight-more"><summary>A little more guidance <ChevronDown size={16}/></summary><div className="insight-expanded"><h3><Target size={16}/> Your next small step</h3><p>{hasGoal?`Keep your goal in mind: ${goal}. You can adjust your plan whenever you need.`:'Set a goal when you’re ready, or simply keep recording your choices.'}</p><p>Make room for a meal, a water break or an alcohol-free choice. A reminder is a moment to check in, not a prompt to drink.</p><button className="insight-chat" onClick={chat}><AiStar/> Talk it through with AI <span>›</span></button><small className="insight-disclosure">AI feature · local preview. Guidance uses saved preferences and built-in responses.</small></div></details></section>;
}
