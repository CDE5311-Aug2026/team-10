import type {Drink} from './data';
export const dateKey=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const nextDay=(key:string,step=1)=>{const d=new Date(key+'T12:00:00');d.setDate(d.getDate()+step);return dateKey(d)};
export type FreeStreak={start:string;end:string;days:number;dates:string[]};
export function alcoholFreeStreaks(freeDays:string[],records:Drink[],today=new Date()):FreeStreak[]{
 const until=dateKey(today),alcohol=new Set(records.filter(d=>d.abv>0&&!d.id.startsWith('sample')&&d.source!=='Sample history').map(d=>dateKey(new Date(d.date))));
 const dates=[...new Set(freeDays)].filter(k=>/^\d{4}-\d{2}-\d{2}$/.test(k)&&dateKey(new Date(k+'T12:00:00'))===k&&k<=until&&!alcohol.has(k)).sort();
 const runs:FreeStreak[]=[];for(const k of dates){const last=runs[runs.length-1];if(last&&nextDay(last.end)===k){last.end=k;last.days++;last.dates.push(k)}else runs.push({start:k,end:k,days:1,dates:[k]})}return runs.filter(r=>r.days>=5);
}
