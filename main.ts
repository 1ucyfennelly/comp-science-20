basic.forever(function () {
    let text = 0
    kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show(text, 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Normal)
})
