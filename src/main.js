const withSourceMap = 'content-with-sourcemap'

const regex = new RegExp("\n//# sourceMappingUrl=")

const withoutSourceMap=withSourceMap.replace(regex, '');

document.querySelector('#app').innerHTML = withoutSourceMap
