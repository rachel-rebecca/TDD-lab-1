const translate = require("./script");

// simple word, all lower case, starting with a vowel
test("apple is appleway", () => {
    expect(translate("apple")).toBe("appleway");
})

// test for "e" as first letter.
test("event is eventway", () => {
    expect(translate("event")).toBe("eventway");
})

// test for "o" as first letter.
test("orange is orangeway", () => {
    expect(translate("orange")).toBe("orangeway");
})

// test for "i" as first letter.
test("igloo is iglooway", () => {
    expect(translate("igloo")).toBe("iglooway");
})

// test for "u" as first letter
test("umbrella is umbrellaway", () => {
    expect(translate("umbrella")).toBe("umbrellaway");
})

// test "y" as first letter.
test("yes is esyay", () => {
    expect(translate("yes")).toBe("esyay");
})

// longer word, starting with a vowel and upper case letter
test("Aarvark is aardvarkway", () => {
    expect(translate("Aardvark")).toBe("aardvarkway");
})

// word starts with vowel and has all vowel capitalized.
test("ElEphAnt is elephantway", () => {
    expect(translate("ElEphAnt")).toBe("elephantway");
})

// simple word starting with a consonant, "o" as second letter after consonant
test("dog is ogday", () => {
    expect(translate("dog")).toBe("ogday");
})

// test for "u" as second letter.
test("hut is uthay", () => {
    expect(translate("hut")).toBe("uthay");
})

// test for "i" as second letter.
test("timid is imidtay", () => {
    expect(translate("timid")).toBe("imidtay");
})

// test for "a" after consonant
test("pat is atpay", () => {
    expect(translate("pat")).toBe("atpay");
})

// test for "e" as second letter after consonant.
test("let is etlay", () => {
    expect(translate("let")).toBe("etlay");
})

// test for setting to lower case.
test("CAT is atcay", () => {
    expect(translate("CAT")).toBe("atcay");
})

// word that starts with consonant and has several vowels afterward.
test("boot is ootbay", () => {
    expect(translate("boot")).toBe("ootbay");
})

// word with "y" as second letter and word with two consonants
test("type is etypay", () => {
    expect(translate("type")).toBe("etypay");
})

// word with three consonants
test("psychology is ologypsychay", () => {
    expect(translate("psychology")).toBe("ologypsychay");
})
