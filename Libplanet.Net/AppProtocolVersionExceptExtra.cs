#nullable disable
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Net
{
    public class AppProtocolVersionExceptExtra : IEqualityComparer<AppProtocolVersion>
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
            x.Version == y.Version &&
            x.Signer.Equals(y.Signer) &&
            x.Signature.SequenceEqual(y.Signature);

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
            int hash = 17;
            unchecked
            {
                hash *= 31 + obj.Version.GetHashCode();
                hash *= 31 + obj.Signature.GetHashCode();
                hash *= 31 + obj.Signer.GetHashCode();
            }

            return hash;
        }
    }
}
