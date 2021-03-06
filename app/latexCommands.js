module.exports = [
    {action: '\\sqrt', label: '\\sqrt{X}'},
    {action: '^', label: 'x^{X}'},
    {action: '\\frac', label: '\\frac{X}{X}'},
    {action: '\\int', label: '\\int_{X}^{X}'},
    {action: '\\lim_', label: '\\lim_{X}'},
    {action: '\\overrightarrow', label: '\\overrightarrow{X}'},
    {action: '\\overleftarrow', label: '\\overleftarrow{X}'},
    {action: '\\sin'},
    {action: '\\cos'},
    {action: '\\tan'},
    {action: '|', label: '|X|'},
    {action: '\\cases', label: '\\begin{cases}X\\\\X\\end{cases}'},
    {action: '\\matrix', label: '\\begin{matrix}X&X\\\\X&X\\end{matrix}'},
    {action: '\\frac{a}{b}^{\\text{(}x}', label: '\\frac{X}{X}^{\\text{(}X}', useWrite: true},
    {action: '\\binom', label: '\\binom{X}{X}'},
    '<br>',
    {action: '\\nthroot', label: '\\sqrt[X]{X}'},
    {action: '_', label: 'x_X'},
    {action: '\\sum', label: '\\sum_{X}^{X}'},
    {action: '\\intsub', label: '\\bigg/_{\\!\\!\\!\\!X}^{X}'},
    {action: '\\lim_{x\\rightarrow\\infty}', label: '\\lim_{x\\rightarrow\\infty}', useWrite:true},
    {action: '\\underrightarrow', label: '\\underrightarrow{X}'},
    {action: '\\bar', label: '\\bar{X}'},
    {action: '\\overline{\\text{i}}', useWrite: true},
    {action: '\\overline{\\text{j}}', useWrite: true},
    {action: '\\overline{\\text{k}}', useWrite: true},
    {action: '(', label: '(X)'},
    {action: '_{ }^{ } ', label: '_{X}^{X}X', useWrite: true},
    {action: '\\array', label: '\\begin{array}{l|l}X&X\\\\\\hlineX&X\\\\X&X\\end{array}'},
    {action: '^{x\\text{)}}\\frac{a}{b}', label: '^{X\\text{)}}\\frac{X}{X}', useWrite: true},
    {action: '\\mathrm', label: '\\mathrm{T}'},
]
