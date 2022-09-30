#nullable disable
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class AppProtocolVersionSameExtraTest
    {
        [Fact]
        public void Equality()
        {
            var signer = new PrivateKey();
            var comparer = new AppProtocolVersionSameExtra();

            AppProtocolVersion claim =
                AppProtocolVersion.Sign(signer, 123, (Bencodex.Types.Text)"foo");

            Assert.True(comparer.Equals(claim, claim));
            Assert.Equal(comparer.GetHashCode(claim), comparer.GetHashCode(claim));

            var claim2 = new AppProtocolVersion(
                claim.Version,
                Bencodex.Types.Null.Value,
                claim.Signature,
                claim.Signer
            );

            Assert.False(comparer.Equals(claim, claim2));
            Assert.NotEqual(comparer.GetHashCode(claim), comparer.GetHashCode(claim2));
            Assert.True(claim == claim2);
            Assert.Equal(claim.GetHashCode(), claim2.GetHashCode());
        }
    }
}
