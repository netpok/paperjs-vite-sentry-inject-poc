const withSourceMap = 'content-with-sourcemap'

const regex = new RegExp("\n//# sourceMappingURL=data:application/json;base64,.*$")

const withoutSourceMap=withSourceMap.replace(regex, '');

document.querySelector('#app').innerHTML = withoutSourceMap
