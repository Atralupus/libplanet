#nullable disable
using System.Collections.Generic;
using System.Diagnostics.Contracts;

namespace Libplanet.Net
{
    public class AppProtocolVersionSameExtra : IEqualityComparer<AppProtocolVersion>
    {
        /// <summary>
        /// Check the version, signer, extra data, and signature are all equal.
        /// </summary>
        /// <param name="x">The first <see cref="AppProtocolVersion"/> to use.</param>
        /// <param name="y">The second <see cref="AppProtocolVersion"/> to use.</param>
        /// <returns>
        /// If the version, signer, extra data, and signature are all equal, then
        /// the two <see cref="AppProtocolVersion"/>s are equal.
        /// </returns>
        [Pure]
        public bool Equals(AppProtocolVersion x, AppProtocolVersion y) =>
            x == y &&
            Equals(x.Extra, y.Extra);

        /// <summary>
        /// If the `Extra` property is not null, then include it in the hash code.
        /// </summary>
        /// <param name="obj">A <see cref="AppProtocolVersion"/>.</param>
        /// <returns>
        /// The hash code contains an extra hash code.
        /// </returns>
        [Pure]
        public int GetHashCode(AppProtocolVersion obj)
        {
            int hash = obj.GetHashCode();
            unchecked
            {
                hash *= 31 + (obj.Extra is null ? 0 : obj.Extra.GetHashCode());
            }

            return hash;
        }
    }
}
