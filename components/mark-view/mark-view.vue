<template>
	<view class="mark-content">
		<mp-html :content="html" :tag-style="tagStyle">
			<uni-load-more status="loading"></uni-load-more>
		</mp-html>
	</view>
</template>

<script>
	import marked  from 'marked';
	import hljs from 'highlight.js';	
	import mpHtml from 'mp-html/src/uni-app/components/mp-html/mp-html'
	export default {
		components:{
			mpHtml
		},
		props: {
			markdown: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				html: '',
				tagStyle: {
					p: 'margin: 10px 0;color: #555;',					
					pre: 'overflow: auto;background: #f5f7f8;padding: 1em;white-space: pre;margin:1em 0;',					
					blockquote: 'border-left: 4px solid #dddddd;padding: 0 10px; color: #777777;margin:0;',
					ul: 'margin: 6px 0 10px;padding-left: 17px;color: #555;',
				}
			}
		},
		computed: {
			/* html() {				
				return marked(this.markdown);
			} */
		},
		watch: {
			markdown: function(val) {
				this.html = marked(val);
			}
		},
		created(){
			// 初始化markdown高亮效果
			this.initHighLight();
		},
		mounted() {
			this.html = marked(this.markdown);
		},
		methods: {
			initHighLight(){
				hljs.configure({useBR: true, tabReplace:' '});
				marked.setOptions({
					renderer: new marked.Renderer(),
					gfm: true,
					tables: true,
					breaks: false,
					pedantic: false,
					highlight: function (code, lang) {
						if (lang && hljs.getLanguage(lang)) {
							// TODO 代码块 使其高亮
							return hljs.highlight(lang, code, true).value;
						} else {
							return hljs.highlightAuto(code).value;
						}
					}
				});
			}
		}
			
	}
</script>

<style lang="scss">
@import 'highlight.js/scss/nnfx.scss';
// @import url("highlight.js/styles/nnfx.css");
/* @import url("highlight.js/styles/default.css"); */
.mark-content {
	._code {
		color: #c1788b !important; 
		padding: 4px 4px 2px 0;
		letter-spacing: -0.3px; 
		font-size: 87.5%;
		word-wrap: break-word;
	}
	._pre ._code {
		padding: 0;
		color: inherit;
		white-space: pre-wrap;
		background-color: transparent;
	}
}
</style>
