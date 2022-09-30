#nullable disable
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class AppProtocolVersionExceptExtraTest
    {
        [Fact]
        public void Equality()
        {
            var signer = new PrivateKey();
            var comparer = new AppProtocolVersionExceptExtra();

            AppProtocolVersion claim =
                AppProtocolVersion.Sign(signer, 123, (Bencodex.Types.Text)"foo");

            var claimDifferentExtra = new AppProtocolVersion(
                claim.Version,
                (Bencodex.Types.Text)"bar",
                claim.Signature,
                claim.Signer
            );

            Assert.True(comparer.Equals(claim, claimDifferentExtra));
            Assert.Equal(comparer.GetHashCode(claim), comparer.GetHashCode(claimDifferentExtra));
            Assert.False(claim == claimDifferentExtra);
            Assert.NotEqual(claim.GetHashCode(), claimDifferentExtra.GetHashCode());
        }
    }
}
