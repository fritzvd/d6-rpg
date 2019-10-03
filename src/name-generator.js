export class MDict {
    constructor() {
        this.d = {};
    }
    addKey(prefix, suffix) {
        if (prefix in this.d) {
            this.d[prefix].push(suffix);
        }
        else {
            this.d[prefix] = [suffix];
        }
    }
    getSuffix(prefix) {
        let l = this.d[prefix];
        if (l === undefined) {
            console.log(prefix.length);
        }
        let randomL = l[Math.floor(Math.random() * l.length)];
        return randomL;
    }
}
export default class NameGenerator {
    constructor(chainlen, feed) {
        this.mdc = new MDict();
        if (chainlen > 10 && chainlen < 1) {
            this.chainlen = chainlen;
        }
        else {
            this.chainlen = 2;
        }
        feed.forEach(l => {
            let s = '';
            for (let i = 0; i < chainlen; i++) {
                s = s + ' ';
            }
            s = s + l;
            for (let i = 0; i < l.length; i++) {
                this.mdc.addKey(s.slice(i, i + chainlen), s[i + chainlen]);
            }
            this.mdc.addKey(s.slice(l.length, l.length + chainlen), "\n");
        });
    }
    newName() {
        let prefix = '';
        for (let i = 0; i < this.chainlen; i++) {
            prefix = prefix + ' ';
        }
        let name = "";
        let suffix = "";
        while (true) {
            suffix = this.mdc.getSuffix(prefix);
            if (suffix === "\n" || name.length > 9) {
                break;
            }
            else {
                name = name + suffix;
                prefix = prefix.slice(1, prefix.length) + suffix;
            }
        }
        return name;
    }
}
