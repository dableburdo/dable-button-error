/**
 * @file dable-jspreadsheet/index.js
 * @brief jspreadsheet component for dable
 * @license MIT
 */
const Dialog  = require('dable-dialog'); 
const Text    = require('dable-text');
const HrzPos  = require('dable-effect-hrzpos');
const HrzCent = require('dable-layout-hrzcenter');

module.exports = class extends Dialog {
    /**
     * initialize component
     * 
     * @param (mixed) string: label text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ErrDialog");
            this.shortForm("text");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.size("3.5rem","2rem");
            this.color([255,230,230]);
            this.title("error");
            this.button("OK", {
                "clickEvent" : new dable.class.ConfArg(
		    (b1,b2,b3) => { b3.visible(false); },
		    this
		)
	    });

            this.layout(new HrzCent(90));

            this.text().config({
                style: { "margin-top" : "0.4rem" },
                size:  "0.2rem",
                effect: new HrzPos("center")
            });
	    let conts = new dable.class.Component(this.text());
            this.child(conts);
	    this.childDom(conts.rootDom()[0]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * error text
     * 
     * @
     */
    text (prm, opt) {
        try {
            if ("string" === typeof prm) {
                this.text().text(prm);
                this.text().config(opt);
                return;
            }
            return this.innerComp("text", prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
