
import styled from "styled-components"

const Imagem = styled.img`
  width: 80px;
  height: 80px;
`
export const ImageMarket = () => {
  return(
    <Imagem src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACgCAYAAABkDQwTAAAagElEQVR4nO2dbWxb13nHn3POvSRFSyJpWbJoixWtxFI6v0jNjZI56Sxns7J1qJ30g4sVqJVmTduhS50U/lJg1TDMH4oNcYtUG9AGWRPbBTqkwwbH7dJFKwp5RZLaYUzJThbLlkxOsqgX0yT1wrd77zn7IFIVKVLiyz2XpMQfIESieZ/nMPrrOec55znnIKiSgiRJIgCYMcY10WjUjDGuAQADQqgGISQAgAgAoKqqOYsJmRAiA4DMGFMS/w1TSiMmkylMKY24XK6Qvp+qvEGlbkApkSRJxBg3xGIxC8a4HiFUv464NIUQEmKMRSil86Io+gEg5HK5ZD18lxtbSoQJ0TXH4/F6jHGzXoLLlYQw50VRnKaUzrtcrnCp26QHm16EkiTtkGW5AWPcQCltKHV78gFj7FdVddpgMPg3cxe+KUUoSZJZlmUHIaSl3KJdEYQRQtOCINzZbBFy04hQkiQxHo87CCHNlRbx8gVj7FcUZeLGjRsTpW6LFlS8CJNRDwD2JDPXLUQYY+wnhIxWcnSsWBFKkrRDVdX2zR71cgVjPFGpYqw4EVbFtz6VKMaKEaEkSWZVVbuq4suNShJj2YtQkiRRluWOxJivSp5UghjLWoQHDhxoQwi1b8GEQ2vClNLRcs2my1KEkiRZVFXdV+16NScsiuJ75RYVy06EBw8e7ACA9lK3Y5MzOjIycrPUjUhSNiKUJMlMKX1EVVVLqduyRSibqEhK3QBIjP0opQ8zxjbLElslIFJKHU1NTXR2djZQyoaUNBJWM9/yACE0LgjCaKlKyUoWCRPd72OMseZStaHKCjZK6a6WlpYZn8+nuxBLIsJEedWhavdbVoiU0man0+m/e/duTE/Huotw//79DsZYd7mMR6ukICqK4mxqalL0HCfqKoTOzs52hNB+PX1WyR+EUNPOnTvRzMyMXxd/ejiBhAAZYx16+eMJIWTdaY1NVEiry3yiLiI8ePDg/krKgBljSiwWQ8Fg0BYOh9sVRdkpy7KNUrqbMbY78TZr4isdDwAEEUJLhJBZQshdURTvG43G2YaGhjtGo5Eldu1VCtyFyF2EXV1dXZRSB28/xcAYU+bm5nYuLCwciEajLaqqPgoATk7u3IIgBIxG47W6urrrdrt9UlXVGk6+NAFjPOF2u9287HMVYTl3wdFoVJ2bm2tZWlo6Fo/HP5slqumBRxCEa2az+X8eeOCBD1VVrS9RO9YFITQ+PDz8ERfbPIxCmQqQMaZMTk46FhYW/kxRlCdLKLxsBAkh79hstvccDseNMoyQXLpmLiIsNwFGo1HV6/V+LhaLfbkMhZcNT21t7U8aGhrGLBbLQqkbswrNhai5CBM1gPu0tlsIoVCozufzfS4ej3++gsS3BkEQ/sNut5+32WxqqdsCAEApdWtZm6ipCCVJssiyfFhLm4WQEN+XEuLbNBBC3ty1a9fPykGMiQqce1rY0kyEibXgQ6WcI4vFYtjj8RytsG43b0wm049bW1v/22g06rq8loYsiuJlLUrBNBGhJEkipfRwqQTIGFO8Xu9D8/PzpzhOrZQbntra2vN79ux5v1TzjoSQEMb4vWKrbzRZtmtsbPwDxliTFrbyJRQK1Y2NjX0nGo3+5WaOfhmwxuPxHr/fLxqNxjsmkymudwMYYybGGJ6ZmZkrxk7RIly1GUlXGGPKnTt3Hp2bm/t7xtgDevsvFxhj+0KhkLS0tDRns9mmStAEW7EFD0WJMDEOfFjvQohIJGK4ffv2M9Fo9CUAMOnpu0yxxuPxnnv37i1YLBavIAi6Ji4IIVtLS8tUobWIRYmnubn5MGNMVxEEAgHi8XgGVFUteRZebjDGpPv37z9hNBp/bTKZFB1dE4RQw/T0tLeghwv12tnZ2U4ptRf6fCFMTEzsmpmZ+ScAKMn4s0KoD4VC3fF43G2xWBb1csoYMxVa/lWQCBNHcnQX8myhjI2NHZ2fnz9T7X5zwhqNRo8tLi7Obd++fVxHvw1Op3M638psXIgnSumhQp4rBMaYMjo6+vTS0tIpvXxuFpaWlk6Njo7+eeIAd12IxWJ5Fy3nHQm7u7sdifMAucMYUz755JPeeDz+TT38bUYURXkkEAjM7Nix4zZCqKCgkw+MMXO+2XJeIkyejMUY4342TFKAsix/m7evzQ6l9JCeQkxky16fz0dzeX9eIty5c+c+SumOgluXB7du3ToWj8df0MPXVoBSemhxcTG6fft2PY7/IPlMYucswmQULKppOTI2NnY0Eon8tR6+thKyLD+sY7Jia2lpmcxl7jDn0Kyqqi6rIhMTE7uqSQg/lpaWTk1MTOgytZZr0MpJhImVEe7JSDAYNAUCge/w9rPVCQQC/xAIBLivclFKGyRJ2nD4lpMI9YiCkUjEMDEx8YMtVAVTSqyTk5P/FIvFjLwd5aKdDUWoVxQcHx9/atV2yiqcYYztvn37di/vOcRcouGGItQjCo6Pjz+iqurXefupkoqqql+/c+fOH+rgZ10NrStCPaJgKBSqW1xc7OPpo0p2FhcXT4VCoTqePhLRMGvB87oVubyjYGIL5tNajAP7+vrg5MmT0NPTo03jdAQhBIKQX3G02+2GV155Bd54441i3VsnJydfrK+v/zueFdqJVbaMc5TrZkh2u30fz9WRO3fuPBqLxYpekuvv74ezZ8+C01m5OQ0h+SWrzc3N8Mwzz0AoFIL333+/KN+Msd2RSORDm812vyhD61OfbRUl6x6T7u5uRywW4zY5HYlEDLdu3Xq52ChotVphdnZWu4aVCFEs7G89GAzCnj17IBgMFtsET0dHx0tGozGnpbZCYIx9dP369TUT5VnHhLyLFCYmJnq16IY7Ozu1aVCJYYwV9JzVaoWuLk1ihdPj8RzVwlA2CCEZT+XNKMJEQsLtDpFAIECi0eg3tLB18ODBlJ8HBgbAYDDk9NXb25vy7NDQUM7PGgyGNW3J59nh4eGUZ5988klACOX0de7cuZRnNRIhxGKxL/NMUrIlKBlFKMtyG6+GAABMTU19SStb6YmIx+PJ+dnW1taUn73egqrTCyLdV3pb1iP9gCwNx8JWn8/3F1oZy0SmHjajCAkhO3k1IhAIEFVVv6iVPYsl9dqTkZGRnJ8tpQjTx3Dpn2M90v/QtBySxOPxY5ynbFrSX1gjwsSVXtw2sft8Pk3nBNN/Aend3HpYranblDUY3OdMuuDziWbpkVCr7jiJz+f7nKYGUzGnr6CsEWE8Huc2FgyFQnWKonxBK3udnZ0pQgoGg3kJqZy643wj4erPabVa1/xBFUM8Hv98NBrltm1UluUUja0RYbYMRgvm5uY0HWum/4/PJwpChl98KBTSpF25kO4rnzEhZOiSNY6GVq/Xyy0aYoyzi5BnVswYi4TD4a9qaTM9M85nPAgZukA9I2G6iPJNLtL/4LTukmOx2Jd5FTcksuSVidEUEUYiEW5H1fp8vv1al2kVkxlDhuiT7/PFUExiAnwz5CTWyclJbnPFsVhspcdNEaHBYODWFQcCAc23iRaTGZcyKYEMUTffcR3PDDnJwsLCn2puNAEhZCXgpYiQ1zWvhJB5VVWf0tpuMZlxKZOSbD7zESHvDBmWt4v+Ma8EZfWdhisilCRJRAhx6Y7HxsYe1vrYtmIz41JHwkw+80lOeGfISbNzc3Nr5vU0wpwcF66IcHV41JpwOPxHWtssNjMux0hYZhkywPLGqGOaG02QzJJXRBiNRrnsJ2aMRRRF+YzWdovNjMtBhMUmJ7wzZFieM/wsryw5FotZYLUIMcZcImEinGueuqWPB4vNjPPtjjN1ffl2h+nCzze50CFDhkSXzCVhTWpuRYS8lupCodABHnbTOXXqVE6/hNbWVhgcHIS+vtTVw/7+fujv78/JV09PD1y9enXN61evXoXjx49v+LzVaoX+/n741re+lfL6s88+C6+//npOn+PIkSPw4osvpryWbyTNlYWFBS5XglBK62F1UevBgwe59P0ff/zxtxO3J2lKX18fvPbaa2tev3jxIly6dAmGh4dXuiun0wmHDx/Oqfzf6/XC0NAQXLhwAYaHhyEYDILVaoXW1lY4fPgwHD9+fEMbw8PDMDAwkNIGq9UKnZ2dcPz4cTh58mTGqIkxXqmwfuONN+DixYvg8XhWIp7T6YQjR47As88+C0eOHFnz/HPPPadFuf8aCCFv7tu376eaG14u5v0VAr73j8gjIyPfAwAuFdqDg4MVuackE6sFWAjnzp2Dr3zlK5q2aRWeAwcOfJPHHhRRFC9jWF4p4XKHWjQaxbwECADQ29sLAwMDBT8/NDQEp0+fLiopGRgYKKoNwWAQvva1r8HEROEXJL3yyis8BQgA4IzFYlyuoMMY12BYDrdcxoN+v5/7HcenT5/O+5mhoSF4/vnnV0R89OhROH/+fF5iHBoagt7eXjh9+jScPn0a9u7dC+fPn8/5+WAwCGfOnIH29nY4d+4c7NmzB5577rmcEixZllO+XnrppZz9FkowGNzOw240GjUj4Hgp9vj4ePfi4mJuo/0iiMdTr/AYGhpKmcz2er3g8XhgZGQE3nrrLRgaGspqq6+vDw4fPgydnZ3Q2tqaYsPtdsPly5fhwoULWbPp1tZW6OnpgWPHjoHT6VzJeIPBIHi9XhgeHk4Zb2biyJEj8Mwzz0BnZyd0dXWttMHj8YDH44Ennngi5f2ZthpoTW1t7Zm2tra12ViRIITGESzPL3VTSjVPw2/evPlULBbjfsZgugj1+KWUklJ8XqPR+KOOjo7/1NouQmgyOUXDZW+xqqrVs2U2CYqicOmOEULLY0JVVXmJsHrVwyaBUsoloCCERAzL9+lyOf6BMbaNh90q+sPrxDRVVQUMy6GWx6AivMUuPNz0EEKKvlY2ExiWQyKvg3Aq93CYKunwCihm7tcJVNk0cOvVqiKsUnKqIqxSckpybX0l0tPTA8ePH8+pXMrr9cLly5fXXZmp8nt4izBY6Rny008/DS+//HLepfeQEOPzzz9fFeMGJAsYuKTeCRFWLGfPnoWf//znBQkQVhXQ5losW+bw2pQt8xwTcjtUSQ8yVT6Xg60SEuRUfS8LsDxZrSCkfbkYQuguY6zi5gr7+vrWRK9gMLhS/bIeFosFOjs712wfOHv2LIyMjFRs14wQWuJhlxCiCIlvZEq1P6oYY3xXVbkd7sSNdAF6vV7o7e3NazPVwMAADA4OppTxf/e7361YERJCZnjYZYwtd8eMsQgPB6Io5nzxcrmQrCNcTb4ChMQ+kxMnTqS81tPTw2ODui4QQqY4mV4R4YbXgRaCIAgVd6z+4cOpW22Sm40KYWhoaE3kS7dfKfAKKIyxcFKEXLJjs9msxwXPmpIeqfLdVJ9OsacslAtGo5FLd0wpjSTrCbmI0Gq1Vlx3rDXFHHpUTjQ0NNzhYddkMi1HwpqaGi5jQpPJRDnOL1XRD7fRaCzsopUNWImEido/HoiEkCucbFfRCUEQArzK/VwuVwgnvpF5rZoYDIZJHnar6IfRaPyQh11CyDysrqJhjM3zcGSxWK7zsFtFP+rq6m7wsJtMiFdESCnlIsKmpqbpSl9D3uJ47HZ74cdDrENScysiVBSF1/0JosFg+C0n21U4IwjCh7xObBNF0Q+rRVhTU+Pn4QgAYNu2bZd42a7CF7PZzDOAhGC1CHkmJ42NjZPVLrkiCba2tnJLSlwulwwZTu/nMituMpmIIAi/4WG7Cj8IIe/wOkyfMbYy/EsRodFo5HavVl1d3a942a7CB5vN9h4v26IoTie/TxEhpXQ64xMa4HA4/q/aJVcUHofDwW16bfVsTIoIXS6XjDHmlaCIRqORy5GzVbSntrb2J7yyYoyx3+VyreQfa8r7GWP3eDiG5QqSt6vRsDJoaGgY42VbVdWUHneNCI1GI7epGpPJRAwGwy+0tpt+2CSnqxTKgvRrJnjcRCUIwr9bLJYFzQ0nMBgMKRpbI8IrV674Oe6+A7vd/rbWNtP3fZw8eVJrF2VD+oapfG+yygW73X5Bc6MJGGMRl8uVkgBn3G1HKeWyTAPLa8kLWkfDt956K+Xn/v7+TXOq/2p6enrWbKC6cEFbvRBC3rTZbNw2BmGMfWtey/RGQRC4Vr7Y7fafaTk2vHDhwpri0cHBQXjttde4XMGqN06nE/r7+2FwcDDlda/Xm9dh7bmwa9eun2lqMA1BENYUx2bd59nV1fU4r1vggcN51j09PWt+SZudEydOwMWLFzWzZzKZftze3v5LzQymgTH2u93ud9Nfz3p7S2Njo4gQ4nbcb11d3bjf7z+k1TEhyUi4GbvhTJw5cwZeffVVLU16HnzwwR8RQrh1xaqqjs7Ozq6p1soqQofDsaiqqhMhxOWUBkEQIBwO347H45rdLn758mUYGRmBxx57rGL3cmyE1+uFEydOaN4N19bW/nDHjh3ccgHGWOTGjRvuTP+WVYQ+n4/a7XYMAFyuoIXlZaGZe/futWt5HvLNmzdhYGAAvF4vWCwWsFqtYDKZtDJfEoLBIPzud7+DgYEBeOGFF+DmTW03MRJC3uzo6Li0nh408DE9PT2dcUVu3bM/JEkyy7L8J7waBsu3gNZ5vd5/rvTTuyoYT2tr69/wnBeE5bXiX69eJVnNul2ty+UKc1zGA0hM2dTW1hZ+OVyVoqitrT3PW4AY44lsAoRcTmo1GAzcN7C3tbW9SwjRdJRdZWMIIa+2tbV9oIOf0fX+fUMRXrlyxc87GgKA2NbW9g5C6C5nP1USIITu7t279x3efjaKgpDrmdV6RMOampp4S0vLC9UCB13wOByObxsMhngO7y2KjaIg5CpCnaIh2Gw21WazfYe3n62OzWb7ntVqjfL2k0sUhHxO7yeEZJzj0RqHwzG1bdu2H+rhaytiNpsHHA7HmvVbHuQSBSGfeSGfzyc3NzeLAGArqmU5sH379vFQKBRWFOVh3r62EiaT6Ud79+79Lz18YYwnrl27ltPkd16rIYIgjDLGlIJblgft7e3/JoriD/TwtRUQRfH77e3t2i00rwNjLJJrFIR8Z8h9Ph/duXMn5bmmvArS2Nh46/79+3OU0kM6+Nu0iKL4/U9/+tODvO61Tocx9tHw8HDOOUTeyzSzs7MBu92+gzGmx+n8pLGx8VYoFFpSFOURHfxtOkwm07889NBDv9BRgFnXiLNRUHECIeSjQp4rELG9vf2X1WQlf8xm80CiC9ZFgLA8nbemVGsjClqw9vl8sebmZuBZ3JDO9u3bx+Px+FA0Gt1fXWfekKDNZntxz5492tf+r8+o2+3Oe9twwVUTMzMz/l27dtkZY8ZCbeSLxWJZMBqNv5mfn38cALicDFDpIITuOhyOb+zcuZPLKWvZYIxFrl+/frWQZ4uqFcQYX9UrW05itVqjDz744IvVtea1EEJe7ejoeJHnHpFMMMaUQrrhJEXVj/l8PlnHbHkFURTVpqam0aWlpVvxeLy12j1DsLa29h87OjoGCeFWEpgVhNDHbrd7rtDni27x7OxsQK9J7HRsNtuUyWT67eLiosoY26e3/3KAEHLlU5/61N/a7XYPz6LUbCCExkdGRnKeE8yEJodhC4IwSindoaqq7uM0i8WyYLFYXh8fH/9kcXGxDwA27873VDz19fU/dDqd/6tn9rsaxlhEFMWiBAgbVVbngyRJ5ng83sPrlPdciEQihomJiaPRaPSvStUGHQgajcafOp3OQV7XOuQCYyxiMBjezaVAYSM0vdrz0UcfbYhGo49rabMQAoEAmZqa+pKqql8sdVu0xGAwXLLb7f/KuxI6F0RRvJx+kkKhaH6/bHd3tyMWi3VpbbcQAoEA8fl8fYqifKHUbSmCoMFg+IXdbn+7HMSX4MbIyIhmNzxpf8nx8qE97YyxDh62CyEUCtXNzc21hcPhr1bQmDFoNBp/2tra+rbJZNI/5c3O6MjIiKZFzlxECGUoxAThqampA4FA4JCqqk+V4dROUBCE39TV1f0qcahoSRKOddBcgMBThLAsxH2MsTaePgqFEBK6ffv2I5FI5LOKonymhBEyaDAYfrtt27ZLjY2Nk2UW9VbDRYDAW4SwfKZNF6XUwdtPkYRnZ2cdoVBovyzLDyuKYgMAXuNaDyHkislkmqyrq7ueuGyo3CJeChjjCbfbza2ynrsIoXy75vWQo9Eo9vv9bbFYrFGW5e2qqu5WVbWJMbYt0Y1nipzB5EYthNBdjPFdURTvC4Iwazabb1mt1vuJm0/LWnSrQQiNDw8Pc62a0kWEUJlCzMpGh4jyOuu5BHDrglejmwhhkwlxC6CLAEHvtcaZmRl/U1OTonfBQ5X8oJS6r1+/Pq6XP90zsdnZ2UBLS8sMQqiJMVYxY6OtAGNMqampef/atWvc7rPJREmmA3w+X2z37t3TCCF7VYjlASFkXhCEdz/44ANdi2GhVCKERC3i7t27JxhjuBRlYFV+D0JonBDidrlcsZL4L4XTdA4cONAGAB2lrMDZijDGFITQJ1quAxdCWYgQEqVglNLHVVWtKXVbtgKEkHmM8VUtSrGKpWxEmKQ6jcMfhNDN4eHhootRtaLsRAjVqMgNjLGfEPKRVnWAWlGWIkzS3d3tUBSloyrG4iiXsV82yrViAwAApqam5nfv3j0NACJjzFLq9lQiCKFxURSvut1u7udLFkpZR8LVSJJkVlW1vQIqcsqCRNfrLofEYyMqRoRJqmJcH4yx32Aw3Lxy5UrZRr50Kk6ESapiTKUSxZekYkWYJClGhNCOrZbAMMYUjPGYIAiTldDtZqPiRbia7u5uhyzLDp63k5YDGGO/qqrTBoNhwuVyyaVuT7FsKhEmkSTJrCjKHoyxfbNER0JImFI6UelRLxObUoSrkSTJEo/HGwghzZUWITHGfsbYPaPR6K/EsV6ubHoRrkaSJDPGuF6W5WaEkKUUZ+esRyLaTRsMhnlK6fRm6GpzYUuJMB1JkkRCSH00Gt2BMa5HCJn1EiYhJMwYm6eUzhuNxhCl1L9VRJfOlhZhNiRJsmCMa6LRqBljXIMQMgOAiBASAUBQFMWQrexs1SYohTEmM8YiABCnlEZMJlOYUhoBgPBWFVwm/h/dYKC4/xcJogAAAABJRU5ErkJggg==" alt="" />
  )
}