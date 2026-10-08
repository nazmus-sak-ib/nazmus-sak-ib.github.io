const entries = import.meta.glob('../../content/**/*.md', { eager: true });
export function items(section: string) {
 return Object.entries(entries).filter(([p,m]: any) => p.includes('/'+section+'/') && !m.frontmatter.draft).map(([p,m]: any) => ({...m, slug:p.split('/').pop().replace('.md','')})).sort((a,b)=>(a.frontmatter.order ?? 99)-(b.frontmatter.order ?? 99));
}
export function entry(name: string): any { return entries['../../content/'+name+'.md']; }
