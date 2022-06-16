/**
 * https://leetcode.com/problems/compare-version-numbers/
 * 
    Example 1:
    Input: version1 = "1.01", version2 = "1.001"
    Output: 0
    Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

    Example 2:
    Input: version1 = "1.0", version2 = "1.0.0"
    Output: 0
    Explanation: version1 does not specify revision 2, which means it is treated as "0".
 * 
 */

function compareVersion(version1, version2) {
    let version1Sections = version1.split('.'), version2Sections = version2.split('.');
    let v1length = version1Sections.length, v2length = version2Sections.length;
    let i = 0, j = 0;

    while (i < v1length || j < v2length) {
        let v1 = i < v1length ? Number(version1Sections[i]) : 0;
        let v2 = j < v2length ? Number(version2Sections[j]) : 0;
        if (v1 != v2) {
            return v1 < v2 ? -1 : 1;
        }
        if (i < v1length) i++;
        if (j < v2length) j++;
    }
    return 0;
}

console.log(compareVersion('0.1.0','1.0.0'));